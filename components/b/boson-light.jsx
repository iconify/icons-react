import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhsrqh-0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhsrqh-0t"/>`,
		"fallback": "selfhst:boson-light",
	});
}

export default Component;
