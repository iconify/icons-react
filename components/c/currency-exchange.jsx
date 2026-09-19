import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv8qhim-o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv8qhim-o"/>`,
		"fallback": "bi:currency-exchange",
	});
}

export default Component;
