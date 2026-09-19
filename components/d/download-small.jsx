import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmbw-t3wg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmbw-t3wg"/>`,
		"fallback": "dinkie-icons:download-small",
	});
}

export default Component;
