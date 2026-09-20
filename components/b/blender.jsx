import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7_hrbzw.css';
import '../../css/k/koq23907p.css';
import '../../css/n/nv9civq7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7_hrbzw"/><path class="koq23907p"/><path class="nv9civq7j"/>`,
		"fallback": "selfhst:blender",
	});
}

export default Component;
