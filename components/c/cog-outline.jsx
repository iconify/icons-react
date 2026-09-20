import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hquvi6b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hquvi6b7l"/>`,
		"fallback": "typcn:cog-outline",
	});
}

export default Component;
