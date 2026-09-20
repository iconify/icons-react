import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vogfxkb9o.css';
import '../../css/k/kf48j8exx.css';
import '../../css/b/bjo9aeylz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vogfxkb9o"/><path class="kf48j8exx"/><path class="bjo9aeylz"/></g>`,
		"fallback": "streamline-cyber-color:baby-milk-bottle",
	});
}

export default Component;
