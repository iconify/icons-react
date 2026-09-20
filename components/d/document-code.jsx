import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr10dfbmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr10dfbmi"/>`,
		"fallback": "ix:document-code",
	});
}

export default Component;
