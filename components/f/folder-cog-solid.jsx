import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfvbl4bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfvbl4bsm"/>`,
		"fallback": "iconaut:folder-cog-solid",
	});
}

export default Component;
