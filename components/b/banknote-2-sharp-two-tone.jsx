import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/erfafodnh.css';
import '../../css/c/cvbi0mioi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="erfafodnh"/><path class="cvbi0mioi"/></g>`,
		"fallback": "keyline-icons:banknote-2-sharp-two-tone",
	});
}

export default Component;
