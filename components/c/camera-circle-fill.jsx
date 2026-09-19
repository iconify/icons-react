import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im9n4db7y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im9n4db7y"/>`,
		"fallback": "f7:camera-circle-fill",
	});
}

export default Component;
