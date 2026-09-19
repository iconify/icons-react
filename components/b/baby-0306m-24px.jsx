import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvhey3wrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvhey3wrj"/>`,
		"fallback": "healthicons:baby-0306m-24px",
	});
}

export default Component;
