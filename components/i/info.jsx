import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_25gqbls.css';
import '../../css/c/c8_pid-oz.css';
import '../../css/r/rr5ch2bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_25gqbls"/><path class="c8_pid-oz"/><path class="rr5ch2bdp"/>`,
		"fallback": "cil:info",
	});
}

export default Component;
