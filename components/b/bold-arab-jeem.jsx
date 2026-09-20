import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21y36n3m.css';
import '../../css/q/qtj8v8b9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u21y36n3m"/><circle class="qtj8v8b9i"/>`,
		"fallback": "ooui:bold-arab-jeem",
	});
}

export default Component;
