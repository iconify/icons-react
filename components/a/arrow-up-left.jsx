import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqb21eg5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqb21eg5u"/>`,
		"fallback": "noviair-light:arrow-up-left",
	});
}

export default Component;
