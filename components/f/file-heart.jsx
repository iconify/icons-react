import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et6kkkb-z.css';
import '../../css/t/tuf-7ccwj.css';
import '../../css/m/mppt_5b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="et6kkkb-z"/><path class="tuf-7ccwj"/><path class="mppt_5b4h"/></g>`,
		"fallback": "andrsrxn:file-heart",
	});
}

export default Component;
