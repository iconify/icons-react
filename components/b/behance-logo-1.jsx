import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3wl8gakq.css';
import '../../css/l/l-hpjac-w.css';
import '../../css/n/nlqdg2buc.css';
import '../../css/w/wfzv3ve_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3wl8gakq"/><path class="l-hpjac-w"/><path class="nlqdg2buc"/><path class="wfzv3ve_g"/></g>`,
		"fallback": "streamline-ultimate-color:behance-logo-1",
	});
}

export default Component;
