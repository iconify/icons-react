import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh404cczq.css';
import '../../css/p/p343mol7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh404cczq"/><path clip-rule="evenodd" class="p343mol7v"/>`,
		"fallback": "stash:folder-multiple-duotone",
	});
}

export default Component;
