import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/a/a21qzhg_s.css';
import '../../css/y/yvuysubju.css';
import '../../css/n/n1q0hcbis.css';
import '../../css/s/st4jq4c_x.css';
import '../../css/q/q4g0v2erb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g transform="translate(0 1)"><path class="a21qzhg_s"/><path class="yvuysubju"/><circle class="n1q0hcbis"/><circle class="st4jq4c_x"/><circle class="q4g0v2erb"/></g>`,
		"fallback": "gcp:cloud-ops",
	});
}

export default Component;
