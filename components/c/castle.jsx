import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yjxmw6bik.css';
import '../../css/t/t-5avtbey.css';
import '../../css/a/aswk6qohq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yjxmw6bik"/><path class="t-5avtbey"/><path class="aswk6qohq"/></g>`,
		"fallback": "hugeicons:castle",
	});
}

export default Component;
