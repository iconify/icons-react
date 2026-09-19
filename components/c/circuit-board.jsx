import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nol19vq4t.css';
import '../../css/a/a4ys69bct.css';
import '../../css/h/hzapyruls.css';
import '../../css/a/a6walofgz.css';
import '../../css/u/uwl0krnbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="nol19vq4t"/><path class="a4ys69bct"/><circle class="hzapyruls"/><path class="a6walofgz"/><path class="uwl0krnbp"/></g>`,
		"fallback": "hugeicons:circuit-board",
	});
}

export default Component;
