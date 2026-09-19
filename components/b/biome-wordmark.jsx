import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in3z5o4jq.css';
import '../../css/e/etos_bc7r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in3z5o4jq"/><path class="etos_bc7r"/>`,
		"fallback": "devicon:biome-wordmark",
	});
}

export default Component;
