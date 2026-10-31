import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxzdupspm.css';
import '../../css/z/z67gyfu4t.css';
import '../../css/c/c1bg69bbu.css';
import '../../css/s/s07e7nb_w.css';
import '../../css/c/c8w1r8bxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxzdupspm"/><path class="z67gyfu4t"/><path class="c1bg69bbu"/><path clip-rule="evenodd" class="s07e7nb_w"/><path class="c8w1r8bxg"/></g>`,
		"fallback": "streamline-kameleon-color:coffee-paper-glass-pop",
	});
}

export default Component;
