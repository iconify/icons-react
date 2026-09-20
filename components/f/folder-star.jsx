import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iblexbz_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iblexbz_e"/>`,
		"fallback": "tabler:folder-star",
	});
}

export default Component;
