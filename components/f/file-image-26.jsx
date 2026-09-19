import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7q2z9dzh.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7q2z9dzh"/>`,
		"fallback": "garden:file-image-26",
	});
}

export default Component;
