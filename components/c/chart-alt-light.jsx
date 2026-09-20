import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/irpy4sbut.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="irpy4sbut"/><rect class="jhxi-trnl"/></g>`,
		"fallback": "lets-icons:chart-alt-light",
	});
}

export default Component;
