import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_vg5qb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_vg5qb5j"/>`,
		"fallback": "typcn:folder",
	});
}

export default Component;
