import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv4k_bcjk.css';
import '../../css/o/oolbpf3kw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv4k_bcjk"/><path class="oolbpf3kw"/>`,
		"fallback": "energy-icons:forecast-48",
	});
}

export default Component;
