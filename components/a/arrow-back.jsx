import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njxp6oxrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njxp6oxrc"/>`,
		"fallback": "typcn:arrow-back",
	});
}

export default Component;
