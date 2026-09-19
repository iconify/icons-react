import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed45f58pb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed45f58pb"/>`,
		"fallback": "devicon-plain:gnuradio-wordmark",
	});
}

export default Component;
