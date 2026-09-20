import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btpk1bcys.css';
import '../../css/m/m76ygirhl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btpk1bcys"/><path class="m76ygirhl"/></g>`,
		"fallback": "streamline-color:computer-chip-2",
	});
}

export default Component;
