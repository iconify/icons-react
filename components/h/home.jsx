import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6r8ui3-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6r8ui3-y"/>`,
		"fallback": "typcn:home",
	});
}

export default Component;
