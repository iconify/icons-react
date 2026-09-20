import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxztuo_we.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxztuo_we"/>`,
		"fallback": "memory:gamepad-down-left-fill",
	});
}

export default Component;
