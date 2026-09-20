import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba4iaoq0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba4iaoq0g"/>`,
		"fallback": "mdi:file-image-minus-outline",
	});
}

export default Component;
