import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at12u8goe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at12u8goe"/>`,
		"fallback": "noviair-light:bathtub",
	});
}

export default Component;
