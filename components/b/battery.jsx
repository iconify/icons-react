import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4ulj1j6r.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4ulj1j6r"/>`,
		"fallback": "ps:battery",
	});
}

export default Component;
