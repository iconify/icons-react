import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fvxi5gcwy.css';
import '../../css/u/u-repbc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fvxi5gcwy"/><path class="u-repbc7v"/></g>`,
		"fallback": "streamline-sharp:heart-rate-clipboard",
	});
}

export default Component;
