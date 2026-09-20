import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o000thbad.css';
import '../../css/p/pet-c9vnz.css';
import '../../css/x/xcttp9pcu.css';
import '../../css/m/mmsn7-b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o000thbad"/><path class="pet-c9vnz"/><path class="xcttp9pcu"/><path class="mmsn7-b1z"/></g>`,
		"fallback": "streamline-cyber-color:businessman",
	});
}

export default Component;
