import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5_s5-uqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5_s5-uqn"/>`,
		"fallback": "hugeicons:dashboard-square-02",
	});
}

export default Component;
