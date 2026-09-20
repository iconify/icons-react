import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4xin6b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4xin6b2t"/>`,
		"fallback": "tdesign:dashboard-filled",
	});
}

export default Component;
