import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilfwspl_f.css';
import '../../css/c/cvojyd_oj.css';
import '../../css/j/jlkzze14k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilfwspl_f"/><path class="cvojyd_oj"/><path class="jlkzze14k"/>`,
		"fallback": "selfhst:glances",
	});
}

export default Component;
