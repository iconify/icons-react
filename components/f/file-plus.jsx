import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grcrhib5c.css';
import '../../css/g/g0o0c02xd.css';
import '../../css/q/qad5q_aey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="grcrhib5c"/><path class="g0o0c02xd"/><path class="qad5q_aey"/></g>`,
		"fallback": "andrsrxn:file-plus",
	});
}

export default Component;
