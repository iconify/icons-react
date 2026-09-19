import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv4di9b7s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv4di9b7s"/>`,
		"fallback": "foundation:anchor",
	});
}

export default Component;
