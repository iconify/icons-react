import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9atepzeo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9atepzeo"/>`,
		"fallback": "ant-design:contacts-outline",
	});
}

export default Component;
