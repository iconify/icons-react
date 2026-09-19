import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nmqind1sb.css';
import '../../css/k/khp4j9b5i.css';
import '../../css/s/sw2m0vb6b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nmqind1sb"/><path class="khp4j9b5i"/><path class="sw2m0vb6b"/></g>`,
		"fallback": "icon-park:flag",
	});
}

export default Component;
