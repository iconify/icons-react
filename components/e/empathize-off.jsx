import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi2o-w3ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi2o-w3ro"/>`,
		"fallback": "tabler:empathize-off",
	});
}

export default Component;
