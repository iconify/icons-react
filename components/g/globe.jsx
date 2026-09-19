import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxugl74-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxugl74-b"/>`,
		"fallback": "circum:globe",
	});
}

export default Component;
