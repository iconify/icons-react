import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqf6-yolw.css';
import '../../css/t/tdcc_2g8h.css';
import '../../css/x/x6_gz0u2j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqf6-yolw"/><path class="tdcc_2g8h"/><path class="x6_gz0u2j"/></g>`,
		"fallback": "streamline-color:insert-top-left",
	});
}

export default Component;
