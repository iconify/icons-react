import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-06_wb9e.css';
import '../../css/d/doxw0tbuo.css';
import '../../css/r/ru7nuwyac.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/h/hi33bccmz.css';
import '../../css/t/ttu5_nb5m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-06_wb9e"/><circle class="doxw0tbuo"/><path class="ru7nuwyac"/><g class="x8poo_bjf"><path class="hi33bccmz"/><circle class="ttu5_nb5m"/></g>`,
		"fallback": "openmoji:avocado",
	});
}

export default Component;
