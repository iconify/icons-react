import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro2bzqbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro2bzqbrn"/>`,
		"fallback": "noviair-light:face-frown",
	});
}

export default Component;
