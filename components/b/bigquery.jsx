import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xcgwb9bps.css';
import '../../css/h/hh4o_6dhg.css';
import '../../css/c/cakmlqblg.css';
import '../../css/r/rlqmyeb_b.css';
import '../../css/r/r3or4298a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xcgwb9bps"/><path class="hh4o_6dhg"/><path class="cakmlqblg"/><path class="rlqmyeb_b"/><path class="r3or4298a"/></g>`,
		"fallback": "gcp:bigquery",
	});
}

export default Component;
