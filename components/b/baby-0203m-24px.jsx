import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulox7yzfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulox7yzfw"/>`,
		"fallback": "healthicons:baby-0203m-24px",
	});
}

export default Component;
