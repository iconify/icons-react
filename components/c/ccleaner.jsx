import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfc3um3-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfc3um3-s"/>`,
		"fallback": "thesvg:ccleaner",
	});
}

export default Component;
