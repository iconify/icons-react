import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq7p8ob2b.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq7p8ob2b"/>`,
		"fallback": "garden:hook-26",
	});
}

export default Component;
