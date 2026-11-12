import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icu7kjy8b.css';
import '../../css/t/tncgtrlau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icu7kjy8b"/><path class="tncgtrlau"/>`,
		"fallback": "selfhst:android-auto-dark",
	});
}

export default Component;
