import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeroz3p3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeroz3p3o"/>`,
		"fallback": "streamline-ultimate:arrow-rectangle-down-2-bold",
	});
}

export default Component;
