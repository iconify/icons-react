import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpa-aachc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpa-aachc"/>`,
		"fallback": "hugeicons:align-vertical-justify-center",
	});
}

export default Component;
