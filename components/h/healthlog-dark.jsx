import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ftmugmu.css';
import '../../css/t/t2zrok28c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ftmugmu"/><path class="t2zrok28c"/>`,
		"fallback": "selfhst:healthlog-dark",
	});
}

export default Component;
