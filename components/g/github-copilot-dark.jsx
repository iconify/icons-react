import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwuo3q2qx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwuo3q2qx"/>`,
		"fallback": "selfhst:github-copilot-dark",
	});
}

export default Component;
