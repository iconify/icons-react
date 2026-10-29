import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y9-evrb5v.css';
import '../../css/l/ll0f9jbgg.css';
import '../../css/i/is8zuu89s.css';
import '../../css/g/gc3brk79d.css';
import '../../css/j/jgzmchb9b.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow y9-evrb5v"/><path class="ll0f9jbgg"/><path class="is8zuu89s"/><path class="gc3brk79d"/><path class="jgzmchb9b wm-shine"/><path class="tv5yr4beu wm-deco"/></g>`,
		"fallback": "withicons-sticker:droplet",
	});
}

export default Component;
