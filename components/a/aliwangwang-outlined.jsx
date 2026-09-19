import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k05r3wbst.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k05r3wbst"/>`,
		"fallback": "ant-design:aliwangwang-outlined",
	});
}

export default Component;
