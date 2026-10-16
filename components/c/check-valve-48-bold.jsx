import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy6xjobjq.css';
import '../../css/x/xnufw5bpr.css';
import '../../css/n/n7i-w0bkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy6xjobjq"/><path class="xnufw5bpr"/><path class="n7i-w0bkc"/>`,
		"fallback": "energy-icons:check-valve-48-bold",
	});
}

export default Component;
