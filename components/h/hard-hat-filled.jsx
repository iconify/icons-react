import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pom5f7b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pom5f7b8i"/>`,
		"fallback": "boxicons:hard-hat-filled",
	});
}

export default Component;
