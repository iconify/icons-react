import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf8aa8b5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf8aa8b5i"/>`,
		"fallback": "fa6-regular:face-grin-stars",
	});
}

export default Component;
