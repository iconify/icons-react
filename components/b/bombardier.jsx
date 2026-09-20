import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyciayb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyciayb-f"/>`,
		"fallback": "simple-icons:bombardier",
	});
}

export default Component;
