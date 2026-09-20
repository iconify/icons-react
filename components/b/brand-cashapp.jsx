import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw005s6mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw005s6mu"/>`,
		"fallback": "tabler:brand-cashapp",
	});
}

export default Component;
