import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd_8dmt-e.css';
import '../../css/o/og0m757ip.css';
import '../../css/y/yt3wnve_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd_8dmt-e"/><path class="og0m757ip"/><path class="yt3wnve_r"/></g>`,
		"fallback": "andrsrxn:file-link",
	});
}

export default Component;
