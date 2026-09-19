import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw7w3hc8y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw7w3hc8y"/>`,
		"fallback": "academicons:academia",
	});
}

export default Component;
