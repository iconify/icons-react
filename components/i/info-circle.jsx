import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/a/a03gtg9ze.css';
import '../../css/p/pkrp80bvu.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/r/rqka9zh8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="a03gtg9ze wm-k"/><path class="pkrp80bvu wm-k"/><path class="d9wk5wbku wm-shine"/><path class="rqka9zh8l wm-a"/></g>`,
		"fallback": "withicons-anime:info-circle",
	});
}

export default Component;
