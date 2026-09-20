import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7_r7vb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7_r7vb2s"/>`,
		"fallback": "streamline-sharp:baggage-solid",
	});
}

export default Component;
