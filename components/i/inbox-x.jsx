import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwxig2-hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwxig2-hp"/>`,
		"fallback": "noviair-light:inbox-x",
	});
}

export default Component;
