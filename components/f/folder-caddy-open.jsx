import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hablheomi.css';
import '../../css/c/c_g70-55x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><g class="t_2lkqbxb"><path class="hablheomi"/><path class="c_g70-55x"/></g>`,
		"fallback": "catppuccin:folder-caddy-open",
	});
}

export default Component;
