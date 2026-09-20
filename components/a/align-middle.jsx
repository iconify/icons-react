import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arf2a9byz.css';
import '../../css/u/ujq-dcbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arf2a9byz"/><path class="ujq-dcbmc"/></g>`,
		"fallback": "streamline-ultimate-color:align-middle",
	});
}

export default Component;
