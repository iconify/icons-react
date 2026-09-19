import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adoz3-3sq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adoz3-3sq"/>`,
		"fallback": "file-icons:adobe-indesign",
	});
}

export default Component;
