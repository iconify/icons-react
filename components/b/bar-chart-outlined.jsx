import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m184yjbsl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m184yjbsl"/>`,
		"fallback": "ant-design:bar-chart-outlined",
	});
}

export default Component;
