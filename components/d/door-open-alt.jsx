import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8ha2hsdr.css';
import '../../css/a/aby3u3bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8ha2hsdr"/><path class="aby3u3bop"/>`,
		"fallback": "boxicons:door-open-alt",
	});
}

export default Component;
