import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c8tr6sbjk.css';
import '../../css/s/s8_lz6bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c8tr6sbjk"/><path class="s8_lz6bim"/></g>`,
		"fallback": "streamline-ultimate:golf-ball",
	});
}

export default Component;
