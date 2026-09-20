import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9tegybcr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9tegybcr"/>`,
		"fallback": "la:id-card-alt-solid",
	});
}

export default Component;
