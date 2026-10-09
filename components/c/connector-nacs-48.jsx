import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xagjmlbpr.css';
import '../../css/x/xtdm6g52u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xagjmlbpr"/><path class="xtdm6g52u"/>`,
		"fallback": "energy-icons:connector-nacs-48",
	});
}

export default Component;
