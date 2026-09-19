import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fruxb_bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fruxb_bvz"/>`,
		"fallback": "ci:add-plus",
	});
}

export default Component;
