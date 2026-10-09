import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru3berbsx.css';
import '../../css/x/x0sa_-lyq.css';
import '../../css/b/bd4fsf3wr.css';
import '../../css/k/koiau4b8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru3berbsx"/><path class="x0sa_-lyq"/><path class="bd4fsf3wr"/><path class="koiau4b8h"/>`,
		"fallback": "energy-icons:anchor-48",
	});
}

export default Component;
