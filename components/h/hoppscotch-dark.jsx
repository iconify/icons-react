import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0sdg2bsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0sdg2bsz"/>`,
		"fallback": "selfhst:hoppscotch-dark",
	});
}

export default Component;
