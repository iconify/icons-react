import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ireq_876v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ireq_876v"/>`,
		"fallback": "streamline-sharp:diagonal-scroll-1",
	});
}

export default Component;
