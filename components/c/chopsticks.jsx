import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw26xdb4f.css';
import '../../css/x/x4cyfsbeh.css';
import '../../css/x/xk937qvba.css';
import '../../css/r/ruxik8b3r.css';
import '../../css/x/xe_p_iboh.css';
import '../../css/u/uwpdibbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qw26xdb4f wm-k"/><path class="wm-a x4cyfsbeh"/><path class="wm-deco xk937qvba"/><path class="ruxik8b3r wm-k"/><path class="wm-a xe_p_iboh"/><path class="uwpdibbuf wm-shadow"/></g>`,
		"fallback": "withicons-valentine:chopsticks",
	});
}

export default Component;
