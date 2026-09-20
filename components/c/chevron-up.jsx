import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eje08obor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eje08obor"/>`,
		"fallback": "prime:chevron-up",
	});
}

export default Component;
