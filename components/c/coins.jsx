import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vz-omtr6g.css';
import '../../css/v/vldmfnb0n.css';
import '../../css/v/vb5rvphpi.css';
import '../../css/u/u6gzkkp0i.css';
import '../../css/m/mxetb5bzm.css';
import '../../css/q/qy9utrbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vz-omtr6g wm-shadow"/><path class="vldmfnb0n wm-shadow"/><path class="vb5rvphpi"/><path class="u6gzkkp0i"/><path class="mxetb5bzm"/><path class="qy9utrbbw"/></g>`,
		"fallback": "withicons-brutal:coins",
	});
}

export default Component;
