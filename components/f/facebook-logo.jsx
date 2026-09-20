import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmfsq1bxr.css';
import '../../css/b/b6rpw3bnz.css';
import '../../css/c/caacvha9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmfsq1bxr"/><path class="b6rpw3bnz"/><path class="caacvha9m"/></g>`,
		"fallback": "streamline-ultimate-color:facebook-logo",
	});
}

export default Component;
