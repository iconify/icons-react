import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ibyacxa.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ibyacxa"/>`,
		"fallback": "nrk:arrow-left-long",
	});
}

export default Component;
