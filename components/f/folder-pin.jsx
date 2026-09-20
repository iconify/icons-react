import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnw4ovbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnw4ovbgu"/>`,
		"fallback": "tabler:folder-pin",
	});
}

export default Component;
