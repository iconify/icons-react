import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_wo5o_hf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_wo5o_hf"/>`,
		"fallback": "selfhst:arlo-dark",
	});
}

export default Component;
