import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d6v9sig8l.css';
import '../../css/r/rj0qgivpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="d6v9sig8l"/><path class="rj0qgivpn"/></g>`,
		"fallback": "catppuccin:astro",
	});
}

export default Component;
