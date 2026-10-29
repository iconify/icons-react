import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zc7zljbjb.css';
import '../../css/v/v23sk_80n.css';
import '../../css/r/r3qu2cbcm.css';
import '../../css/r/r5pjbvbwb.css';
import '../../css/t/tlfrq1b8j.css';
import '../../css/t/to5sc4jwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zc7zljbjb"/><path class="v23sk_80n wm-deco"/><path class="r3qu2cbcm wm-deco"/><path class="r5pjbvbwb wm-k"/><path class="tlfrq1b8j wm-a"/><path class="to5sc4jwz wm-k"/></g>`,
		"fallback": "withicons:axe-blueprint",
	});
}

export default Component;
