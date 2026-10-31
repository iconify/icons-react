import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecxn1oa5b.css';
import '../../css/q/q6o4jwb6z.css';
import '../../css/p/pvk5fzlsw.css';
import '../../css/r/reefzmcoq.css';
import '../../css/g/gv5gxjtpf.css';
import '../../css/g/g8qlwqb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecxn1oa5b wm-shadow"/><path class="q6o4jwb6z"/><path class="pvk5fzlsw"/><path class="reefzmcoq"/><path class="gv5gxjtpf"/><path class="g8qlwqb9p"/></g>`,
		"fallback": "withicons-retro:ghost",
	});
}

export default Component;
