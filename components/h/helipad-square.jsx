import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i07gtwbuw.css';
import '../../css/e/e-cfuhb1l.css';
import '../../css/t/tteg0wbxj.css';
import '../../css/g/g9sivlltp.css';
import '../../css/t/tg2mksb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i07gtwbuw"/><path class="e-cfuhb1l"/><path class="tteg0wbxj"/><path class="g9sivlltp"/><path class="tg2mksb7i"/></g>`,
		"fallback": "streamline-cyber-color:helipad-square",
	});
}

export default Component;
