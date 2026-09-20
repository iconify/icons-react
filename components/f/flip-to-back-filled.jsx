import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m363_p6yk.css';
import '../../css/q/q9ju5jb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m363_p6yk"/><path class="q9ju5jb6w"/>`,
		"fallback": "tdesign:flip-to-back-filled",
	});
}

export default Component;
