import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it0pw9vzb.css';
import '../../css/p/p6fvi8blj.css';
import '../../css/f/f11l8tb-e.css';
import '../../css/c/c8kervbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="it0pw9vzb"/><path class="p6fvi8blj"/><path class="f11l8tb-e"/><path class="c8kervbmo"/></g>`,
		"fallback": "streamline-cyber-color:headphone",
	});
}

export default Component;
