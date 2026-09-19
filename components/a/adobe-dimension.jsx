import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1hv903-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1hv903-k"/>`,
		"fallback": "file-icons:adobe-dimension",
	});
}

export default Component;
