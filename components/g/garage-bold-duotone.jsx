import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6e5-ctfb.css';
import '../../css/i/i3rjp8brq.css';
import '../../css/o/o1g4_ci-r.css';
import '../../css/v/vzn707dmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6e5-ctfb"/><path class="i3rjp8brq"/><path clip-rule="evenodd" class="o1g4_ci-r"/><path class="vzn707dmk"/>`,
		"fallback": "solar:garage-bold-duotone",
	});
}

export default Component;
