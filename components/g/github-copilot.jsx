import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbj_t9bpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbj_t9bpc"/>`,
		"fallback": "selfhst:github-copilot",
	});
}

export default Component;
