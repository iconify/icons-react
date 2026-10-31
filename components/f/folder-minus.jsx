import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2fs4jasg.css';
import '../../css/r/ro_pjhbmj.css';
import '../../css/o/ohpo3zbwn.css';
import '../../css/t/tt2pjvbfo.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2fs4jasg wm-k"/><path class="ro_pjhbmj wm-shine"/><path class="ohpo3zbwn wm-shine"/><path class="tt2pjvbfo wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-minus",
	});
}

export default Component;
