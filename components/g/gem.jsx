import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzy02n6it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzy02n6it"/>`,
		"fallback": "hugeicons:gem",
	});
}

export default Component;
