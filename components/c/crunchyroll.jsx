import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s17m2ib-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s17m2ib-h"/>`,
		"fallback": "cib:crunchyroll",
	});
}

export default Component;
