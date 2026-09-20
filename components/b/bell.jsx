import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb_bkrocs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb_bkrocs"/>`,
		"fallback": "subway:bell",
	});
}

export default Component;
