import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bpuwlobok.css';
import '../../css/m/mx53s8b-j.css';
import '../../css/b/b8q_cvhji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bpuwlobok wm-shadow"/><path class="mx53s8b-j wm-shadow"/><path class="b8q_cvhji"/></g>`,
		"fallback": "withicons-brutal:chart-line",
	});
}

export default Component;
