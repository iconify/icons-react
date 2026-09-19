import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm8r-wj9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jm8r-wj9u"/>`,
		"fallback": "heroicons:clock-solid",
	});
}

export default Component;
