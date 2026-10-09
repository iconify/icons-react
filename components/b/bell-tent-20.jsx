import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhzmbr41b.css';
import '../../css/i/i1hgre67m.css';
import '../../css/s/sbqip972w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhzmbr41b"/><path class="i1hgre67m"/><path class="sbqip972w"/>`,
		"fallback": "energy-icons:bell-tent-20",
	});
}

export default Component;
