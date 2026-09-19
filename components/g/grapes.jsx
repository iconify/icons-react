import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7d6r45if.css';
import '../../css/b/bmeh6ut8b.css';
import '../../css/i/iot5hrb8y.css';
import '../../css/b/b2a1zvboh.css';
import '../../css/f/f-n_988_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q7d6r45if"/><path class="bmeh6ut8b"/><path class="iot5hrb8y"/><path class="b2a1zvboh"/><path class="f-n_988_q"/></g>`,
		"fallback": "hugeicons:grapes",
	});
}

export default Component;
