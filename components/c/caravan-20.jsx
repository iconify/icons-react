import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm_8txhtx.css';
import '../../css/p/pw6vk1b4e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm_8txhtx"/><path class="pw6vk1b4e"/>`,
		"fallback": "energy-icons:caravan-20",
	});
}

export default Component;
