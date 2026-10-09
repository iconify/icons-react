import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayan5y9nl.css';
import '../../css/q/qhc6f6b0w.css';
import '../../css/i/inu9gabyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayan5y9nl"/><path class="qhc6f6b0w"/><path class="inu9gabyk"/>`,
		"fallback": "energy-icons:engineer-48-bold",
	});
}

export default Component;
