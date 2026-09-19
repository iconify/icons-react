import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uumsez6hp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uumsez6hp"/>`,
		"fallback": "file-icons:adobe-prelude",
	});
}

export default Component;
