import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlg4gbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlg4gbmy"/>`,
		"fallback": "mingcute:chevron-last-fill",
	});
}

export default Component;
