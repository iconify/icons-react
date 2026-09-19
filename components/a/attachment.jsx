import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksvj0z6ja.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksvj0z6ja"/>`,
		"fallback": "topcoat:attachment",
	});
}

export default Component;
