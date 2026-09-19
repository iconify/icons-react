import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp8jllb1u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp8jllb1u"/>`,
		"fallback": "ant-design:aliyun-outline",
	});
}

export default Component;
