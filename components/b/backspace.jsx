import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo7j_okwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo7j_okwg"/>`,
		"fallback": "uil:backspace",
	});
}

export default Component;
