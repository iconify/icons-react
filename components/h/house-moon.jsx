import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruonb3bbt.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/t/th_9z-bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ruonb3bbt"/><path class="gsvrl7yuk"/><path class="th_9z-bpj"/></g>`,
		"fallback": "andrsrxn:house-moon",
	});
}

export default Component;
