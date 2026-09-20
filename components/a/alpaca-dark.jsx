import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs7w7kbfr.css';
import '../../css/w/wp17s5bha.css';
import '../../css/r/ref5yimac.css';

const viewBox = {"width":1081,"height":309};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs7w7kbfr"/><path clip-rule="evenodd" class="wp17s5bha"/><path class="ref5yimac"/>`,
		"fallback": "thesvg-color:alpaca-dark",
	});
}

export default Component;
