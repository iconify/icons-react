import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuzmv5bfi.css';
import '../../css/m/m3ckqtbim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuzmv5bfi"/><path class="m3ckqtbim"/>`,
		"fallback": "ooui:articles-search-rtl",
	});
}

export default Component;
