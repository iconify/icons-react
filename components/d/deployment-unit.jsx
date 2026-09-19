import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1u7m-bdt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1u7m-bdt"/>`,
		"fallback": "ant-design:deployment-unit",
	});
}

export default Component;
