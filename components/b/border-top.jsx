import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snm29mb3q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snm29mb3q"/>`,
		"fallback": "ant-design:border-top",
	});
}

export default Component;
