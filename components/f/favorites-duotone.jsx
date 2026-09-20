import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wit9n4b-r.css';
import '../../css/i/ig9_8-b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wit9n4b-r"/><path class="ig9_8-b5f"/>`,
		"fallback": "lets-icons:favorites-duotone",
	});
}

export default Component;
