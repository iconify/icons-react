import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g42bubbuu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g42bubbuu"/>`,
		"fallback": "ant-design:close-outline",
	});
}

export default Component;
