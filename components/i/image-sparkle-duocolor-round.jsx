import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzls5_m7x.css';
import '../../css/g/gqa7vck7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dzls5_m7x"/><path class="gqa7vck7h"/></g>`,
		"fallback": "coolicons:image-sparkle-duocolor-round",
	});
}

export default Component;
