import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qd8049_dv.css';
import '../../css/e/efopjv1cm.css';
import '../../css/z/z0i4lz73h.css';
import '../../css/t/t_319yzks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qd8049_dv"/><path class="efopjv1cm"/><path class="z0i4lz73h"/><path class="t_319yzks"/></g>`,
		"fallback": "streamline-cyber-color:gameboy",
	});
}

export default Component;
