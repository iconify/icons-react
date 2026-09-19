import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fryw55bul.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fryw55bul"/>`,
		"fallback": "fluent-mdl2:box-logo",
	});
}

export default Component;
