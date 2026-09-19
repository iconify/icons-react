import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2fub7b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2fub7b9j"/>`,
		"fallback": "hugeicons:attachment-02",
	});
}

export default Component;
