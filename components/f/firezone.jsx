import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abozm7xon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abozm7xon"/>`,
		"fallback": "selfhst:firezone",
	});
}

export default Component;
