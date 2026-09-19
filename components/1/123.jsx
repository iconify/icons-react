import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqvd6z70p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqvd6z70p"/>`,
		"fallback": "bi:123",
	});
}

export default Component;
