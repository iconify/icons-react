import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf4u1os6q.css';
import '../../css/e/euvn5gkav.css';
import '../../css/r/r2aeg49cb.css';
import '../../css/a/a6nvfqtpq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tf4u1os6q"><path class="euvn5gkav"/><path class="r2aeg49cb"/><path class="a6nvfqtpq"/></g>`,
		"fallback": "catppuccin:docusaurus",
	});
}

export default Component;
