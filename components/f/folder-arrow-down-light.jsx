import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd4od4bcx.css';
import '../../css/t/tm3vgc7aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd4od4bcx"/><path clip-rule="evenodd" class="tm3vgc7aa"/>`,
		"fallback": "stash:folder-arrow-down-light",
	});
}

export default Component;
