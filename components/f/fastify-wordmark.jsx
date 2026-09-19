import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwwbofhyd.css';
import '../../css/c/cr89sgbzt.css';
import '../../css/n/nm48-zs_v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwwbofhyd"/><path class="cr89sgbzt"/><path class="nm48-zs_v"/>`,
		"fallback": "devicon-plain:fastify-wordmark",
	});
}

export default Component;
