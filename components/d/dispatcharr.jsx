import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdaxkdb1q.css';
import '../../css/l/l-nhlab9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdaxkdb1q"/><path class="l-nhlab9d"/>`,
		"fallback": "selfhst:dispatcharr",
	});
}

export default Component;
