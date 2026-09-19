import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cua6mti1r.css';

const viewBox = {"width":520,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cua6mti1r"/>`,
		"fallback": "ps:do-not-dry",
	});
}

export default Component;
