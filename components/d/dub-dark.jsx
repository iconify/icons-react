import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syeeeyb_b.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syeeeyb_b"/>`,
		"fallback": "thesvg-color:dub-dark",
	});
}

export default Component;
