import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5l_d69-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5l_d69-k"/>`,
		"fallback": "heroicons:battery-0-solid",
	});
}

export default Component;
