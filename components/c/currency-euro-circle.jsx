import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8m-65bwf.css';
import '../../css/h/hjlxz_puh.css';
import '../../css/y/y5t0kkb7h.css';
import '../../css/j/jc650nbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8m-65bwf"/><path class="hjlxz_puh"/><path class="y5t0kkb7h"/><path class="jc650nbwv"/></g>`,
		"fallback": "streamline-ultimate-color:currency-euro-circle",
	});
}

export default Component;
