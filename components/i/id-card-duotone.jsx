import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fe4pabiai.css';
import '../../css/u/u19s2tbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fe4pabiai"/><path class="u19s2tbby"/></g>`,
		"fallback": "keyline-icons:id-card-duotone",
	});
}

export default Component;
