import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-crgbb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-crgbb2x"/>`,
		"fallback": "hugeicons:briefcase-09",
	});
}

export default Component;
