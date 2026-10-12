import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozw6d3b3f.css';
import '../../css/h/h2bmrpbsg.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozw6d3b3f"/><path class="h2bmrpbsg"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:bell-check-20",
	});
}

export default Component;
