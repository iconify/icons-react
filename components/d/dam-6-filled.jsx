import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejyr96b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejyr96b-o"/>`,
		"fallback": "tdesign:dam-6-filled",
	});
}

export default Component;
