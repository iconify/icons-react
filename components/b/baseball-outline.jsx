import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q00u4lbrm.css';
import '../../css/q/q3ouhtb3r.css';
import '../../css/f/fv17wn2rj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q00u4lbrm"/><circle class="q3ouhtb3r"/><path class="fv17wn2rj"/>`,
		"fallback": "famicons:baseball-outline",
	});
}

export default Component;
