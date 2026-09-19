import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/ml3vkx56u.css';
import '../../css/d/dc2c0qyzp.css';
import '../../css/w/w83s4xb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ml3vkx56u"/><path class="dc2c0qyzp"/><path class="w83s4xb3u"/></g>`,
		"fallback": "hugeicons:folder-shared-01",
	});
}

export default Component;
