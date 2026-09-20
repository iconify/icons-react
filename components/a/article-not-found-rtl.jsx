import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oikpp_b-d.css';
import '../../css/a/a9mph4b6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oikpp_b-d"/><path class="a9mph4b6u"/>`,
		"fallback": "ooui:article-not-found-rtl",
	});
}

export default Component;
