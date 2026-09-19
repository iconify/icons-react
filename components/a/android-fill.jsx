import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlfsh1b-c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlfsh1b-c"/>`,
		"fallback": "ant-design:android-fill",
	});
}

export default Component;
