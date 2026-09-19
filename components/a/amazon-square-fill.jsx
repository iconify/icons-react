import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db8k76whz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db8k76whz"/>`,
		"fallback": "ant-design:amazon-square-fill",
	});
}

export default Component;
