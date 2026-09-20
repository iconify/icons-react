import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rha8oacpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rha8oacpm"/>`,
		"fallback": "keyline-icons:gallery-horizontal-start-sharp",
	});
}

export default Component;
