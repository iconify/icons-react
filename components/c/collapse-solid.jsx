import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbx9-zbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbx9-zbfj"/>`,
		"fallback": "iconaut:collapse-solid",
	});
}

export default Component;
