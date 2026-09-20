import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/supp6dp9b.css';
import '../../css/z/za-azub4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="supp6dp9b"/><path class="za-azub4t"/>`,
		"fallback": "token:bico",
	});
}

export default Component;
