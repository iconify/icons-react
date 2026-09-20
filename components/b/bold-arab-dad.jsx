import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzdnmsb-q.css';
import '../../css/t/ty_2is9tk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzdnmsb-q"/><circle class="ty_2is9tk"/>`,
		"fallback": "ooui:bold-arab-dad",
	});
}

export default Component;
