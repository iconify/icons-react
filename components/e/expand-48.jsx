import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8xqzbqy.css';
import '../../css/p/pba0y-2ri.css';
import '../../css/m/m1-zbuhax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8xqzbqy"/><path class="pba0y-2ri"/><path class="m1-zbuhax"/>`,
		"fallback": "energy-icons:expand-48",
	});
}

export default Component;
