import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuqfn8y1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuqfn8y1k"/>`,
		"fallback": "meteor-icons:google-play",
	});
}

export default Component;
