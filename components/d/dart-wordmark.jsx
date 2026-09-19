import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxgz0fldn.css';
import '../../css/c/cq5b2q68g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxgz0fldn"/><path class="cq5b2q68g"/>`,
		"fallback": "devicon-plain:dart-wordmark",
	});
}

export default Component;
