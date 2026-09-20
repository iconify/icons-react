import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trz6_5eei.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trz6_5eei"/>`,
		"fallback": "map:diving",
	});
}

export default Component;
