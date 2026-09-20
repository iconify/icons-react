import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dza_qqxed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dza_qqxed"/>`,
		"fallback": "lineicons:blogger-alt",
	});
}

export default Component;
