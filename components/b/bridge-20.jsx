import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1t5mtm0a.css';
import '../../css/w/w1gklacoq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1t5mtm0a"/><path class="w1gklacoq"/>`,
		"fallback": "energy-icons:bridge-20",
	});
}

export default Component;
