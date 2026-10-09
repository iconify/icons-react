import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk86n9brf.css';
import '../../css/x/xn-ip-jci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk86n9brf"/><path class="xn-ip-jci"/>`,
		"fallback": "energy-icons:beer-48",
	});
}

export default Component;
