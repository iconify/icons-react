import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0e07wo_i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0e07wo_i"/>`,
		"fallback": "f7:delete-left",
	});
}

export default Component;
