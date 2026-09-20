import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x42f5accj.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x42f5accj"/>`,
		"fallback": "lineicons:expand-arrow-1",
	});
}

export default Component;
