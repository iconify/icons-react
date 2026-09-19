import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/a/a4v76gi7m.css';
import '../../css/w/wt1fcu4ke.css';
import '../../css/k/kmj7kph2b.css';
import '../../css/a/ar7d3wbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="a4v76gi7m"/><path class="wt1fcu4ke"/><path class="kmj7kph2b"/><path class="ar7d3wbfq"/></g>`,
		"fallback": "icon-park-solid:badminton",
	});
}

export default Component;
