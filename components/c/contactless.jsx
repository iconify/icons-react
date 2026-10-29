import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsavtj4fm.css';
import '../../css/v/v9akuab2u.css';
import '../../css/i/ijq81m47g.css';
import '../../css/d/dzh30w4rr.css';
import '../../css/j/jcqwim8st.css';
import '../../css/q/qn1gmudbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jsavtj4fm wm-k"/><path class="v9akuab2u wm-k"/><path class="ijq81m47g wm-k"/><path class="dzh30w4rr wm-a"/><path class="jcqwim8st wm-a"/><path class="qn1gmudbi wm-a"/></g>`,
		"fallback": "withicons-anime:contactless",
	});
}

export default Component;
