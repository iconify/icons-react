import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smld00b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smld00b5p"/>`,
		"fallback": "simple-icons:iceland",
	});
}

export default Component;
