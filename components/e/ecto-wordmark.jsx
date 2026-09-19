import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atyzbqqte.css';
import '../../css/l/lqtxhpbhh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atyzbqqte"/><path class="lqtxhpbhh"/>`,
		"fallback": "devicon:ecto-wordmark",
	});
}

export default Component;
