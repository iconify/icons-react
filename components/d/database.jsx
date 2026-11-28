import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh9h2u3sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh9h2u3sn"/>`,
		"fallback": "noviair-light:database",
	});
}

export default Component;
