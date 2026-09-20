import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfxo03bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfxo03bvz"/>`,
		"fallback": "tabler:chevron-compact-right",
	});
}

export default Component;
