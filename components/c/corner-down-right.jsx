import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geer96bee.css';
import '../../css/i/iu4clfvda.css';
import '../../css/b/b5ppmovqv.css';
import '../../css/k/kz71i2hpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="geer96bee wm-k"/><path class="iu4clfvda wm-k"/><path class="b5ppmovqv wm-k"/><path class="kz71i2hpn wm-shine"/></g>`,
		"fallback": "withicons-anime:corner-down-right",
	});
}

export default Component;
