import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi4vo2skc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi4vo2skc"/>`,
		"fallback": "coolicons:arrow-right-from-line-fill-round",
	});
}

export default Component;
