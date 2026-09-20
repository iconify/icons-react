import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egjj-sb5s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egjj-sb5s"/>`,
		"fallback": "radix-icons:arrow-down",
	});
}

export default Component;
