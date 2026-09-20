import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfg6wabjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfg6wabjl"/>`,
		"fallback": "solar:arrow-right-broken",
	});
}

export default Component;
