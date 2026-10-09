import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg1we5wmy.css';
import '../../css/w/wz_jv-b9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg1we5wmy"/><path class="wz_jv-b9y"/>`,
		"fallback": "energy-icons:grid-network-20",
	});
}

export default Component;
