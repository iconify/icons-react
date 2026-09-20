import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k29omfbdq.css';
import '../../css/v/v0quseb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k29omfbdq"/><path clip-rule="evenodd" class="v0quseb4u"/>`,
		"fallback": "stash:ellipsis-v-duotone",
	});
}

export default Component;
