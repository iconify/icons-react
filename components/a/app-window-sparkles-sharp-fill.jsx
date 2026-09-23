import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kjptfrbkg.css';
import '../../css/n/n0lh29bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kjptfrbkg"/><path class="n0lh29bta"/></g>`,
		"fallback": "keyline-icons:app-window-sparkles-sharp-fill",
	});
}

export default Component;
