import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjmdt3wxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjmdt3wxl"/>`,
		"fallback": "tdesign:icon-filled",
	});
}

export default Component;
