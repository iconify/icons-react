import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npa5ly1qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npa5ly1qf"/>`,
		"fallback": "tabler:brand-bunpo",
	});
}

export default Component;
