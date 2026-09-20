import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i73vyxe7x.css';
import '../../css/n/nbm911b0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i73vyxe7x"/><path class="nbm911b0e"/>`,
		"fallback": "selfhst:crow-ci-light",
	});
}

export default Component;
