import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2skl5y1f.css';
import '../../css/g/g1daw1jvj.css';
import '../../css/r/rkxs26aad.css';
import '../../css/w/w1i9nslzm.css';
import '../../css/q/qgkaimcqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2skl5y1f"/><rect transform="rotate(-60 14.732 18.856)" class="g1daw1jvj"/><path class="rkxs26aad"/><rect transform="rotate(30 21 4)" class="w1i9nslzm"/><rect transform="rotate(30 13 17.856)" class="qgkaimcqv"/></g>`,
		"fallback": "icon-park:gavel",
	});
}

export default Component;
