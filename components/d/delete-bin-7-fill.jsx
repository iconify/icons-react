import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqx0c2-nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqx0c2-nj"/>`,
		"fallback": "ri:delete-bin-7-fill",
	});
}

export default Component;
