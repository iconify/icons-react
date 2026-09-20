import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c66xcebar.css';
import '../../css/a/at6xz-pmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c66xcebar"/><path class="at6xz-pmo"/>`,
		"fallback": "selfhst:datasette",
	});
}

export default Component;
