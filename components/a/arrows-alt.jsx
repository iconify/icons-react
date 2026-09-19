import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsgbuptnf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsgbuptnf"/>`,
		"fallback": "ant-design:arrows-alt",
	});
}

export default Component;
