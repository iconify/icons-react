import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok0x02bci.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok0x02bci"/>`,
		"fallback": "ant-design:coffee",
	});
}

export default Component;
