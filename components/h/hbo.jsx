import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyqu36w3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyqu36w3h"/>`,
		"fallback": "simple-icons:hbo",
	});
}

export default Component;
