import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rprapz00k.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rprapz00k"/>`,
		"fallback": "fa-solid:compact-disc",
	});
}

export default Component;
