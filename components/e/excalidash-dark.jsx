import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpnjj88nd.css';
import '../../css/m/mjttu00lo.css';
import '../../css/y/y8-17omyv.css';
import '../../css/x/x-mqmdlpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpnjj88nd"/><path class="mjttu00lo"/><path class="y8-17omyv"/><path class="x-mqmdlpz"/>`,
		"fallback": "selfhst:excalidash-dark",
	});
}

export default Component;
