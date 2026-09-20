import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kypg14bve.css';
import '../../css/o/o8857ob4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kypg14bve"/><path class="o8857ob4w"/></g>`,
		"fallback": "keyline-icons:fullscreen-exit-2-sharp-two-tone",
	});
}

export default Component;
