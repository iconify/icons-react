import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcz4m5c4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kcz4m5c4m"/>`,
		"fallback": "pepicons:circle-filled",
	});
}

export default Component;
