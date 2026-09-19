import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if44z4kgq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if44z4kgq"/>`,
		"fallback": "devicon-plain:githubcopilot-wordmark",
	});
}

export default Component;
