import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwnecvwyq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwnecvwyq"/>`,
		"fallback": "devicon-plain:devicon-wordmark",
	});
}

export default Component;
