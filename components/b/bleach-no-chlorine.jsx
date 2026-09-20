import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1bibsy4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1bibsy4o"/>`,
		"fallback": "tabler:bleach-no-chlorine",
	});
}

export default Component;
