import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx5ws8bol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yx5ws8bol"/>`,
		"fallback": "heroicons:document-currency-yen-16-solid",
	});
}

export default Component;
