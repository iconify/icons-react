import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epwhaes-t.css';
import '../../css/w/wysjzs6ya.css';
import '../../css/r/rbbd3hpog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epwhaes-t"/><path class="wysjzs6ya"/><path class="rbbd3hpog"/></g>`,
		"fallback": "andrsrxn:file-text",
	});
}

export default Component;
