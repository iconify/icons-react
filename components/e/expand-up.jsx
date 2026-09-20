import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvhqw7b-k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvhqw7b-k"/>`,
		"fallback": "pajamas:expand-up",
	});
}

export default Component;
