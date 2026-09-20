import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9jni4bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9jni4bio"/>`,
		"fallback": "tabler:currency-off",
	});
}

export default Component;
