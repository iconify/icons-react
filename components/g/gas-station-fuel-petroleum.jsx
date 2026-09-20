import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q253iibin.css';
import '../../css/g/g64i7obiw.css';
import '../../css/f/figa1kb8x.css';
import '../../css/m/m4f_04qby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q253iibin"/><path class="g64i7obiw"/><path class="figa1kb8x"/><path class="m4f_04qby"/></g>`,
		"fallback": "streamline-color:gas-station-fuel-petroleum",
	});
}

export default Component;
