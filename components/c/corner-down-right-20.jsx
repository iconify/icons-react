import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbx9m__qq.css';
import '../../css/b/bj40tef2x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbx9m__qq"/><path class="bj40tef2x"/>`,
		"fallback": "energy-icons:corner-down-right-20",
	});
}

export default Component;
