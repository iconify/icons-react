import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udh7_hb0a.css';
import '../../css/o/ohjhkxihh.css';
import '../../css/u/uhjlwkoha.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="udh7_hb0a"/><path class="ohjhkxihh"/><path class="uhjlwkoha"/></g>`,
		"fallback": "cif:ba",
	});
}

export default Component;
