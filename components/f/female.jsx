import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nttdkvbwv.css';
import '../../css/a/atxln4p5z.css';
import '../../css/n/ny2ojebag.css';
import '../../css/p/p3xekojef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nttdkvbwv"/><path class="atxln4p5z"/><path class="ny2ojebag"/><path class="p3xekojef"/></g>`,
		"fallback": "streamline-cyber-color:female",
	});
}

export default Component;
