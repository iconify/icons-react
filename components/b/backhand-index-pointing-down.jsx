import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gorrngmsl.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/l9wgslc9t.css';
import '../../css/z/zp34hmbbm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gorrngmsl"/><g class="ij2x_72vy"><path class="l9wgslc9t"/><path class="zp34hmbbm"/></g>`,
		"fallback": "openmoji:backhand-index-pointing-down",
	});
}

export default Component;
