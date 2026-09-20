import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhylwcb4c.css';
import '../../css/i/i9iy2ubyt.css';
import '../../css/z/z6_v87d1t.css';
import '../../css/f/f4uw3z_xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhylwcb4c"/><path class="i9iy2ubyt"/><path class="z6_v87d1t"/><path class="f4uw3z_xi"/></g>`,
		"fallback": "streamline-cyber-color:computer-pc-4",
	});
}

export default Component;
