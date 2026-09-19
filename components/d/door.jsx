import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmh6un4qk.css';
import '../../css/i/iaergbsgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmh6un4qk"/><path class="iaergbsgk"/>`,
		"fallback": "cil:door",
	});
}

export default Component;
