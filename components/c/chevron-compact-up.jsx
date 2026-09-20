import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxs94ebsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxs94ebsg"/>`,
		"fallback": "tabler:chevron-compact-up",
	});
}

export default Component;
