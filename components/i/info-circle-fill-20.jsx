import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggzcegw8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggzcegw8t"/>`,
		"fallback": "garden:info-circle-fill-20",
	});
}

export default Component;
