import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvjq4ab0w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvjq4ab0w"/>`,
		"fallback": "ant-design:gitlab-fill",
	});
}

export default Component;
