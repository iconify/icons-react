import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/asv8bq5ab.css';
import '../../css/q/qhlafk6oo.css';
import '../../css/g/gx_d1o28p.css';
import '../../css/o/oqb2ck4sg.css';
import '../../css/f/frtt-mb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="asv8bq5ab wm-shadow"/><path class="qhlafk6oo wm-shadow"/><path class="gx_d1o28p"/><path class="oqb2ck4sg"/><path class="frtt-mb6c"/></g>`,
		"fallback": "withicons-brutal:flask-conical",
	});
}

export default Component;
