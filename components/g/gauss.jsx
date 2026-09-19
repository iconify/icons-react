import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af0ksw-nw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af0ksw-nw"/>`,
		"fallback": "file-icons:gauss",
	});
}

export default Component;
