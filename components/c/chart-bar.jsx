import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzt9c_6gx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzt9c_6gx"/>`,
		"fallback": "memory:chart-bar",
	});
}

export default Component;
