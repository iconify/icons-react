import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hotj8abpa.css';
import '../../css/l/ls15nzj_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hotj8abpa"/><path class="ls15nzj_w"/>`,
		"fallback": "energy-icons:alert-octagon-48",
	});
}

export default Component;
