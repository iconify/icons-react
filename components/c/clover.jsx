import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko6nueb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko6nueb8o"/>`,
		"fallback": "noviair:clover",
	});
}

export default Component;
