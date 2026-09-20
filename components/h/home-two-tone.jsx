import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m918zyb_f.css';
import '../../css/x/x_-yl4b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m918zyb_f"/><path class="x_-yl4b2h"/></g>`,
		"fallback": "keyline-icons:home-two-tone",
	});
}

export default Component;
