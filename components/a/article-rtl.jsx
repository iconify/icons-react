import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x16refvya.css';
import '../../css/a/a9mph4b6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x16refvya"/><path class="a9mph4b6u"/>`,
		"fallback": "ooui:article-rtl",
	});
}

export default Component;
