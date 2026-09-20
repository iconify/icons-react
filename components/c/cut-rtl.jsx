import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zphvvzb5w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zphvvzb5w"/>`,
		"fallback": "ooui:cut-rtl",
	});
}

export default Component;
