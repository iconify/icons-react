import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o727yzb3y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o727yzb3y"/>`,
		"fallback": "ant-design:copy-outline",
	});
}

export default Component;
