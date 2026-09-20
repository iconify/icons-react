import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk-bu9-no.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dk-bu9-no"/>`,
		"fallback": "ix:e-mail-filled",
	});
}

export default Component;
