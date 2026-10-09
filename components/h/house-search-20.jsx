import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7juawdew.css';
import '../../css/o/o5q8omqss.css';
import '../../css/l/l72lv6f7j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7juawdew"/><path class="o5q8omqss"/><path class="l72lv6f7j"/>`,
		"fallback": "energy-icons:house-search-20",
	});
}

export default Component;
