import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld6q39zjy.css';
import '../../css/g/g2kfimbmv.css';
import '../../css/j/j_-fncawe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ld6q39zjy"/><path class="g2kfimbmv"/><path class="j_-fncawe"/></g>`,
		"fallback": "andrsrxn:file-ai",
	});
}

export default Component;
