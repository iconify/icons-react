import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7m-xtbun.css';
import '../../css/m/m8p6f_bpl.css';
import '../../css/x/xra_wvbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7m-xtbun"/><path class="m8p6f_bpl"/><path class="xra_wvbeb"/></g>`,
		"fallback": "streamline-cyber-color:crown-2",
	});
}

export default Component;
