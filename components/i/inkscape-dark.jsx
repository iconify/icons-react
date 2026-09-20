import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssfz_ebsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssfz_ebsf"/>`,
		"fallback": "selfhst:inkscape-dark",
	});
}

export default Component;
