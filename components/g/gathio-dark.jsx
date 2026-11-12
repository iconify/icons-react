import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojcwywxn.css';
import '../../css/h/hua_nkb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojcwywxn"/><path class="hua_nkb7m"/>`,
		"fallback": "selfhst:gathio-dark",
	});
}

export default Component;
