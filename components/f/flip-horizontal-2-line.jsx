import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugn-a1bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugn-a1bzd"/>`,
		"fallback": "ri:flip-horizontal-2-line",
	});
}

export default Component;
