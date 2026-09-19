import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngl4_3bgm.css';

const viewBox = {"width":432,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngl4_3bgm"/>`,
		"fallback": "ps:baidu",
	});
}

export default Component;
