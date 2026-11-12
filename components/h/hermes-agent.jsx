import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aouuz78vs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aouuz78vs"/>`,
		"fallback": "selfhst:hermes-agent",
	});
}

export default Component;
