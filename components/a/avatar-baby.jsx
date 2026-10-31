import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tdhkvdb_j.css';
import '../../css/g/gk6bacbrc.css';
import '../../css/r/rps76bcfx.css';
import '../../css/s/ss0hvrbeg.css';
import '../../css/q/qpygcaclf.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tdhkvdb_j wm-shadow"/><path class="gk6bacbrc"/><path class="rps76bcfx"/><path class="ss0hvrbeg"/><path class="qpygcaclf"/><path class="s7hum9b6t"/></g>`,
		"fallback": "withicons-brutal:avatar-baby",
	});
}

export default Component;
