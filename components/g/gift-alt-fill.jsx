import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9qj50b7j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9qj50b7j"/>`,
		"fallback": "f7:gift-alt-fill",
	});
}

export default Component;
