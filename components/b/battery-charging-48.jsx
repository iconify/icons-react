import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l73ftcc0i.css';
import '../../css/v/vimw34l9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l73ftcc0i"/><path class="vimw34l9o"/>`,
		"fallback": "energy-icons:battery-charging-48",
	});
}

export default Component;
