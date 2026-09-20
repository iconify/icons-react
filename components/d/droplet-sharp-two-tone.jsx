import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hulkn4bbv.css';
import '../../css/i/i-w726bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hulkn4bbv"/><path class="i-w726bqw"/></g>`,
		"fallback": "keyline-icons:droplet-sharp-two-tone",
	});
}

export default Component;
