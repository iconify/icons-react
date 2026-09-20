import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv8g7sb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gv8g7sb_b"/>`,
		"fallback": "token:atomic",
	});
}

export default Component;
