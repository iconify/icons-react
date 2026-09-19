import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyw9ubbcq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyw9ubbcq"/>`,
		"fallback": "devicon-plain:bevyengine-wordmark",
	});
}

export default Component;
