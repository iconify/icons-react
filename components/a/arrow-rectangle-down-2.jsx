import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijhqezidm.css';
import '../../css/o/ob2nyzbep.css';
import '../../css/c/cyt_muboz.css';
import '../../css/q/qr4i7rbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijhqezidm"/><path class="ob2nyzbep"/><path class="cyt_muboz"/><path class="qr4i7rbxh"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-rectangle-down-2",
	});
}

export default Component;
