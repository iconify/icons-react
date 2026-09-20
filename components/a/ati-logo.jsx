import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwj4rxbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwj4rxbzo"/>`,
		"fallback": "streamline-ultimate:ati-logo",
	});
}

export default Component;
