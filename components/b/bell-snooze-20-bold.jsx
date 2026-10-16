import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6vbh3spu.css';
import '../../css/k/kwnn45cyx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6vbh3spu"/><path class="kwnn45cyx"/>`,
		"fallback": "energy-icons:bell-snooze-20-bold",
	});
}

export default Component;
