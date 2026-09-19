import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5zngn6ow.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5zngn6ow"/>`,
		"fallback": "ant-design:hugging-face-filled",
	});
}

export default Component;
