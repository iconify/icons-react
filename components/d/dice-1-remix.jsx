import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3345hbsl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3345hbsl"/>`,
		"fallback": "streamline:dice-1-remix",
	});
}

export default Component;
