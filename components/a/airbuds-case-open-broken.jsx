import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s9d3aj35l.css';
import '../../css/b/bzgri7b_b.css';
import '../../css/x/xc7mudb6e.css';
import '../../css/j/jgur5aczj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s9d3aj35l"/><path class="bzgri7b_b"/><path class="xc7mudb6e"/><path class="jgur5aczj"/></g>`,
		"fallback": "solar:airbuds-case-open-broken",
	});
}

export default Component;
