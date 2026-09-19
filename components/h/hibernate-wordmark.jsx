import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-o71g2hw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-o71g2hw"/>`,
		"fallback": "devicon-plain:hibernate-wordmark",
	});
}

export default Component;
