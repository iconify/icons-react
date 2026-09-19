import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9gpahb5r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9gpahb5r"/>`,
		"fallback": "heroicons:currency-bangladeshi-16-solid",
	});
}

export default Component;
