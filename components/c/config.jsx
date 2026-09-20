import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax27h5ulz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax27h5ulz"/>`,
		"fallback": "picon:config",
	});
}

export default Component;
