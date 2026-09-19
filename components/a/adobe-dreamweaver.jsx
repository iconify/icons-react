import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8o_qbc7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8o_qbc7d"/>`,
		"fallback": "cib:adobe-dreamweaver",
	});
}

export default Component;
