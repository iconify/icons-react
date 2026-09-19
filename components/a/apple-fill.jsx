import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi8skqb1m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi8skqb1m"/>`,
		"fallback": "ant-design:apple-fill",
	});
}

export default Component;
