import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg9c4xx5n.css';
import '../../css/y/y_xndqb9y.css';
import '../../css/n/n_6vc_r2y.css';
import '../../css/q/qf8a_6bcc.css';
import '../../css/a/azk25zbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg9c4xx5n"/><path class="y_xndqb9y"/><path class="n_6vc_r2y"/><path class="qf8a_6bcc"/><path class="azk25zbwf"/>`,
		"fallback": "material-icon-theme:auto-light",
	});
}

export default Component;
