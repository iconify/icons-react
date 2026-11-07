import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jppf41bdk.css';
import '../../css/j/j-xg48kfo.css';
import '../../css/t/tnn4k8b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jppf41bdk"/><path class="j-xg48kfo"/><path clip-rule="evenodd" class="tnn4k8b5u"/>`,
		"fallback": "solar:folder-pen-bold",
	});
}

export default Component;
