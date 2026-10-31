import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9ynqqbmy.css';
import '../../css/j/jy_7mhbhw.css';
import '../../css/m/mqzz-ccdn.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9ynqqbmy"/><path class="jy_7mhbhw"/><path class="mqzz-ccdn"/></g>`,
		"fallback": "cif:bs",
	});
}

export default Component;
