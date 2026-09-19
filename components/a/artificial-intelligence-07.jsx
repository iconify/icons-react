import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s9guyqmoy.css';
import '../../css/h/hucsmkbjo.css';
import '../../css/c/ch84l-bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s9guyqmoy"/><path class="hucsmkbjo"/><path class="ch84l-bun"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-07",
	});
}

export default Component;
