import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6dw91kyr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6dw91kyr"/>`,
		"fallback": "ant-design:check-circle-filled",
	});
}

export default Component;
