import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if5b9ygfg.css';

const viewBox = {"width":251,"height":232};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if5b9ygfg"/>`,
		"fallback": "thesvg-color:asana",
	});
}

export default Component;
