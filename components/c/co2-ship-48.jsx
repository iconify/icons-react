import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4uuy_b9u.css';
import '../../css/l/lq6x1topr.css';
import '../../css/h/hcihy2b2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4uuy_b9u"/><path class="lq6x1topr"/><path class="hcihy2b2b"/>`,
		"fallback": "energy-icons:co2-ship-48",
	});
}

export default Component;
