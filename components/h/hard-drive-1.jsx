import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3iqlcrja.css';
import '../../css/y/y44f65b_r.css';
import '../../css/j/jom8f3b7p.css';
import '../../css/o/o8cqc7bfr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g3iqlcrja"/><path class="y44f65b_r"/><path class="jom8f3b7p"/><path class="o8cqc7bfr"/></g>`,
		"fallback": "streamline-color:hard-drive-1",
	});
}

export default Component;
