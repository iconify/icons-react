import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f2wcktryo.css';
import '../../css/f/f_056cc9h.css';
import '../../css/i/i-qglfbjv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="f2wcktryo"/><path class="f_056cc9h"/></g><path class="i-qglfbjv"/>`,
		"fallback": "catppuccin:hacking",
	});
}

export default Component;
