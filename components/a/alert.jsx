import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdo169pd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shdo169pd"/>`,
		"fallback": "ooui:alert",
	});
}

export default Component;
