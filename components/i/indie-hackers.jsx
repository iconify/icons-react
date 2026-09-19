import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1rdl2wrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1rdl2wrg"/>`,
		"fallback": "gg:indie-hackers",
	});
}

export default Component;
