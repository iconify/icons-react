import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjcm6d98u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjcm6d98u"/>`,
		"fallback": "ant-design:discord-outlined",
	});
}

export default Component;
