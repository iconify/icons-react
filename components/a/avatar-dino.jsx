import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p5d8ywnbx.css';
import '../../css/u/ujwxmhbgy.css';
import '../../css/w/w7ltv3bad.css';
import '../../css/u/uf6m5jbnb.css';
import '../../css/s/sba99yduu.css';
import '../../css/o/oh7b1r72t.css';
import '../../css/j/jsa556b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="p5d8ywnbx wm-shadow"/><path class="ujwxmhbgy"/><path class="w7ltv3bad"/><path class="uf6m5jbnb"/><path class="sba99yduu wm-shine"/><path class="oh7b1r72t wm-deco"/><path class="jsa556b4r wm-deco"/></g>`,
		"fallback": "withicons-sticker:avatar-dino",
	});
}

export default Component;
