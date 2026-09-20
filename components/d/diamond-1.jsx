import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2n0_2byu.css';
import '../../css/a/akgd25bdz.css';
import '../../css/g/g4o7onk-i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2n0_2byu"/><path class="akgd25bdz"/><path class="g4o7onk-i"/></g>`,
		"fallback": "streamline-flex-color:diamond-1",
	});
}

export default Component;
