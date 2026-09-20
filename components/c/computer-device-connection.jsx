import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/masewyb4j.css';
import '../../css/l/lenyg7dgs.css';
import '../../css/i/i3a9e5bfx.css';
import '../../css/z/za_ou75ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="masewyb4j"/><path class="lenyg7dgs"/><path class="i3a9e5bfx"/><path class="za_ou75ti"/></g>`,
		"fallback": "streamline-cyber-color:computer-device-connection",
	});
}

export default Component;
