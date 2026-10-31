import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tow7mjrvd.css';
import '../../css/d/djr3mab5i.css';
import '../../css/x/xtmme9dyh.css';
import '../../css/x/x-1027b5h.css';
import '../../css/l/lgx4gnbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tow7mjrvd"/><path class="djr3mab5i wm-shine"/><path class="wm-k xtmme9dyh"/><path class="wm-a x-1027b5h"/><path class="lgx4gnbwm wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-unicorn",
	});
}

export default Component;
