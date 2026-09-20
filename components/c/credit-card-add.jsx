import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw-n5ubeb.css';
import '../../css/q/q15f3bbny.css';
import '../../css/i/ijnim64fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw-n5ubeb"/><path class="q15f3bbny"/><path class="ijnim64fb"/></g>`,
		"fallback": "streamline-cyber-color:credit-card-add",
	});
}

export default Component;
