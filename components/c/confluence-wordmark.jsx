import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa78v4bxo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa78v4bxo"/>`,
		"fallback": "devicon-plain:confluence-wordmark",
	});
}

export default Component;
