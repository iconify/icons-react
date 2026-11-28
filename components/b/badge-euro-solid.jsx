import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzlhxm12g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzlhxm12g"/>`,
		"fallback": "iconaut:badge-euro-solid",
	});
}

export default Component;
