import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e9re5aczb.css';
import '../../css/d/d8o4fuqed.css';
import '../../css/q/qouz_ycgt.css';
import '../../css/y/yf7y73m0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="e9re5aczb"/><path class="d8o4fuqed"/><path class="qouz_ycgt"/><path class="yf7y73m0f"/></g>`,
		"fallback": "icon-park:comment",
	});
}

export default Component;
