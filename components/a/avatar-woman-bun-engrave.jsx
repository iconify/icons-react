import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x631pqb1u.css';
import '../../css/z/z0n9bb6hx.css';
import '../../css/y/y-rjltu9b.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x631pqb1u"/><path class="wm-a z0n9bb6hx"/><path class="wm-shadow y-rjltu9b"/><path class="o9wp5rbfh wm-k"/><path class="msfwckeky wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bun-engrave",
	});
}

export default Component;
