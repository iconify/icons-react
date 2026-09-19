import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-a3xwaf.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq-a3xwaf"/>`,
		"fallback": "ps:60-140",
	});
}

export default Component;
