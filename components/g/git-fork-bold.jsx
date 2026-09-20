import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg4a_c4ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg4a_c4ev"/>`,
		"fallback": "solar:git-fork-bold",
	});
}

export default Component;
