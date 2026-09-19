import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m75jywxio.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m75jywxio"/>`,
		"fallback": "fluent-mdl2:custom-list-mirrored",
	});
}

export default Component;
