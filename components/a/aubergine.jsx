import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-roltbpz.css';
import '../../css/t/thf8vdb1b.css';
import '../../css/o/oxcajzmoz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-roltbpz"/><path class="thf8vdb1b"/><path class="oxcajzmoz"/>`,
		"fallback": "fxemoji:aubergine",
	});
}

export default Component;
