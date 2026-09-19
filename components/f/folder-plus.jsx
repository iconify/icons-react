import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xun-ug0px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xun-ug0px"/>`,
		"fallback": "heroicons:folder-plus",
	});
}

export default Component;
