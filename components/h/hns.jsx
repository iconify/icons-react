import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho936o10f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ho936o10f"/>`,
		"fallback": "token:hns",
	});
}

export default Component;
