import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/g/gr7r812zo.css';
import '../../css/s/s0zq9lpyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="gr7r812zo"/><path class="s0zq9lpyr"/></g>`,
		"fallback": "catppuccin:adobe-ps",
	});
}

export default Component;
