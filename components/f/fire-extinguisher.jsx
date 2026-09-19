import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad23npbqw.css';
import '../../css/l/lb-0v7ltb.css';
import '../../css/m/mfrasobdp.css';
import '../../css/j/jn91ksbyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ad23npbqw"/><path class="lb-0v7ltb"/><path class="mfrasobdp"/><circle class="jn91ksbyv"/></g>`,
		"fallback": "icon-park:fire-extinguisher",
	});
}

export default Component;
