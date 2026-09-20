import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juznr5scs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juznr5scs"/>`,
		"fallback": "oui:folder-exclamation",
	});
}

export default Component;
