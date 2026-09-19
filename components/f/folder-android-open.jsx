import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/na8fl-4nl.css';
import '../../css/r/rvqvkbceq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="na8fl-4nl"/><path class="rvqvkbceq"/></g>`,
		"fallback": "catppuccin:folder-android-open",
	});
}

export default Component;
