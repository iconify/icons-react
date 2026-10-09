import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ue9wb8n.css';
import '../../css/r/re6y0hbtf.css';
import '../../css/j/jfdfjcbzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7ue9wb8n"/><path class="re6y0hbtf"/><path class="jfdfjcbzb"/>`,
		"fallback": "energy-icons:bookmark-plus-48-bold",
	});
}

export default Component;
