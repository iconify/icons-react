import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siiby4bnw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siiby4bnw"/>`,
		"fallback": "fluent-mdl2:image-pixel",
	});
}

export default Component;
