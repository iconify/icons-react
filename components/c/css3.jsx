import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om12kcc9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om12kcc9b"/>`,
		"fallback": "typcn:css3",
	});
}

export default Component;
