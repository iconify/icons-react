import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aei0xrbup.css';
import '../../css/p/pl9_uwwwt.css';
import '../../css/j/j5_gj04sw.css';
import '../../css/e/en7mfccjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aei0xrbup"/><path clip-rule="evenodd" class="pl9_uwwwt"/><path clip-rule="evenodd" class="j5_gj04sw"/><path class="en7mfccjd"/></g>`,
		"fallback": "iconoir:database-xmark-solid",
	});
}

export default Component;
