import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urtzmgbhs.css';
import '../../css/q/q5rhorqnk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urtzmgbhs"/><path class="q5rhorqnk"/>`,
		"fallback": "ion:eye-off-outline",
	});
}

export default Component;
