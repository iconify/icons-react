import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-qhhhbmb.css';
import '../../css/l/lddmp3qwq.css';
import '../../css/i/iihcr0bma.css';
import '../../css/i/i77bn-bkr.css';
import '../../css/d/d67y9itqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-qhhhbmb"/><path class="lddmp3qwq"/><path class="iihcr0bma"/><path class="i77bn-bkr"/><path class="d67y9itqx"/></g>`,
		"fallback": "streamline-ultimate-color:charging-battery-empty",
	});
}

export default Component;
