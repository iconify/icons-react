import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd18jumlu.css';
import '../../css/l/ll5_hob1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd18jumlu"/><path clip-rule="evenodd" class="ll5_hob1b"/>`,
		"fallback": "stash:folder-arrow-right",
	});
}

export default Component;
