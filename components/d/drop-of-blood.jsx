import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz5c7gbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz5c7gbxl"/>`,
		"fallback": "fluent-emoji-flat:drop-of-blood",
	});
}

export default Component;
