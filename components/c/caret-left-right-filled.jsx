import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsf40n85b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsf40n85b"/>`,
		"fallback": "tabler:caret-left-right-filled",
	});
}

export default Component;
