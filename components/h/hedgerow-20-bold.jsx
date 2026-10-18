import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8u_2aczb.css';
import '../../css/t/t8o25qn7d.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8u_2aczb"/><path class="t8o25qn7d"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:hedgerow-20-bold",
	});
}

export default Component;
