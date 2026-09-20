import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw4tq_q9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hw4tq_q9w"/>`,
		"fallback": "streamline-sharp:dial-pad-finger-2-solid",
	});
}

export default Component;
