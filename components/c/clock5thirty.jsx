import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/r/rc5x6vdrd.css';
import '../../css/d/dsx4j5bsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt893gged"/><path class="eg39dacou"/><path class="rc5x6vdrd"/><path class="dsx4j5bsa"/>`,
		"fallback": "fxemoji:clock5thirty",
	});
}

export default Component;
