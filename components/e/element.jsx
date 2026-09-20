import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jar4abbwg.css';
import '../../css/l/legm6kbvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jar4abbwg"/><path class="legm6kbvu"/>`,
		"fallback": "selfhst:element",
	});
}

export default Component;
