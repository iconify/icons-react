import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7r5e0e4r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7r5e0e4r"/>`,
		"fallback": "ant-design:idcard-filled",
	});
}

export default Component;
