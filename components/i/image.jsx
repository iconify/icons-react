import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu397ue7u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu397ue7u"/>`,
		"fallback": "oui:image",
	});
}

export default Component;
