import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m29s7npiv.css';
import '../../css/y/y2bunt3ut.css';
import '../../css/a/absptgbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m29s7npiv"/><path class="y2bunt3ut"/><path class="absptgbdd"/></g>`,
		"fallback": "iconoir:database-solid",
	});
}

export default Component;
