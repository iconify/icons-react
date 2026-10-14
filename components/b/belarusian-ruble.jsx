import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-m5rn9ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-m5rn9ii"/>`,
		"fallback": "lucide:belarusian-ruble",
	});
}

export default Component;
