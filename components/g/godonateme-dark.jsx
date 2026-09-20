import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phqcd--ip.css';
import '../../css/n/n5tl80b1h.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phqcd--ip"/><path class="n5tl80b1h"/>`,
		"fallback": "thesvg-color:godonateme-dark",
	});
}

export default Component;
