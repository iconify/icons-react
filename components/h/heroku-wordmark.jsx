import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx6l2l7vq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx6l2l7vq"/>`,
		"fallback": "devicon-plain:heroku-wordmark",
	});
}

export default Component;
