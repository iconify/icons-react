import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5am75sz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5am75sz"/>`,
		"fallback": "catppuccin:folder",
	});
}

export default Component;
