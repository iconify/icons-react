import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruxjphsni.css';
import '../../css/v/vstk5-qrh.css';
import '../../css/b/b4z-br47a.css';
import '../../css/y/y7_fmvbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ruxjphsni"/><path class="vstk5-qrh"/><path class="b4z-br47a"/><path class="y7_fmvbpj"/></g>`,
		"fallback": "streamline-ultimate-color:cash-search",
	});
}

export default Component;
