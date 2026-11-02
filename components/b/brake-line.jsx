import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqc415bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqc415bit"/>`,
		"fallback": "mingcute:brake-line",
	});
}

export default Component;
