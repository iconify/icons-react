import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr3dt1wtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr3dt1wtu"/>`,
		"fallback": "solar:bone-outline",
	});
}

export default Component;
