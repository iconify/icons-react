import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6x24cc9z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6x24cc9z"/>`,
		"fallback": "devicon-plain:consul-wordmark",
	});
}

export default Component;
