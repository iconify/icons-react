import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt5xi-btt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt5xi-btt"/>`,
		"fallback": "whh:circlearrowleft",
	});
}

export default Component;
