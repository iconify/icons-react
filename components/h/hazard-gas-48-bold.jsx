import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2mjsubix.css';
import '../../css/b/bkl1c0rno.css';
import '../../css/k/kp5hxh01s.css';
import '../../css/b/bol9gfbvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2mjsubix"/><path class="bkl1c0rno"/><path class="kp5hxh01s"/><path class="bol9gfbvx"/>`,
		"fallback": "energy-icons:hazard-gas-48-bold",
	});
}

export default Component;
