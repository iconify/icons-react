import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l628z4bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l628z4bbi"/>`,
		"fallback": "thesvg-color:freelancermap",
	});
}

export default Component;
