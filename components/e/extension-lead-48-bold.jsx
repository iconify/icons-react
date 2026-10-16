import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt6bg53-l.css';
import '../../css/x/xc-gyrbwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt6bg53-l"/><path class="xc-gyrbwo"/>`,
		"fallback": "energy-icons:extension-lead-48-bold",
	});
}

export default Component;
