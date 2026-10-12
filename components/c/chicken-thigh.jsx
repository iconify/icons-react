import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6us5vbnx.css';
import '../../css/b/bq7aq9dei.css';
import '../../css/f/fnlqenbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q6us5vbnx"/><path class="bq7aq9dei"/><path class="fnlqenbng"/></g>`,
		"fallback": "andrsrxn:chicken-thigh",
	});
}

export default Component;
