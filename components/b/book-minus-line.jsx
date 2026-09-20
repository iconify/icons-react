import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp2kpl4oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp2kpl4oc"/>`,
		"fallback": "majesticons:book-minus-line",
	});
}

export default Component;
