import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f5mcp3p6l.css';
import '../../css/e/e51nzac3w.css';
import '../../css/k/kqbg0g8jb.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f5mcp3p6l"/><path class="e51nzac3w"/><path class="kqbg0g8jb"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:basketball-broken",
	});
}

export default Component;
