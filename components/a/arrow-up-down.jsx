import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mvpf9y7lh.css';
import '../../css/f/f7yo3kbtn.css';
import '../../css/x/x7cf4gjvy.css';
import '../../css/u/uw90nxbzm.css';
import '../../css/z/zetx6lb3t.css';
import '../../css/e/epv168b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mvpf9y7lh wm-shadow"/><path class="f7yo3kbtn"/><path class="x7cf4gjvy"/><path class="uw90nxbzm"/><path class="wm-shine zetx6lb3t"/><path class="epv168b8p wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-up-down",
	});
}

export default Component;
