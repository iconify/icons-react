import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcvvnm9up.css';
import '../../css/t/tfrxq1bdn.css';
import '../../css/a/a_ob2jjcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcvvnm9up"/><path class="tfrxq1bdn"/><path class="a_ob2jjcs"/></g>`,
		"fallback": "solar:file-corrupted-bold",
	});
}

export default Component;
