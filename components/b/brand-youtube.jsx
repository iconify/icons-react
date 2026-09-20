import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1xefcbvp.css';
import '../../css/f/fbkse1tbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1xefcbvp"/><path class="fbkse1tbj"/></g>`,
		"fallback": "tabler:brand-youtube",
	});
}

export default Component;
