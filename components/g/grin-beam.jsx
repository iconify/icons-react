import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stilfpl4k.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stilfpl4k"/>`,
		"fallback": "fa-regular:grin-beam",
	});
}

export default Component;
