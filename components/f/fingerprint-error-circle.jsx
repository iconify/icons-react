import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyd16ttwk.css';
import '../../css/q/qejtpchlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oyd16ttwk"/><path class="qejtpchlt"/></g>`,
		"fallback": "iconoir:fingerprint-error-circle",
	});
}

export default Component;
