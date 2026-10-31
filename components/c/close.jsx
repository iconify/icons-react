import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yy7m5dbrn.css';
import '../../css/e/e47sjs74x.css';
import '../../css/g/g72mfb4-p.css';
import '../../css/m/m7atqbckd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yy7m5dbrn"/><path class="e47sjs74x wm-shadow"/><path class="g72mfb4-p"/><path class="m7atqbckd"/></g>`,
		"fallback": "withicons-brutal:close",
	});
}

export default Component;
