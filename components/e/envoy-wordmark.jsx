import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exgu2ir-q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exgu2ir-q"/>`,
		"fallback": "devicon-plain:envoy-wordmark",
	});
}

export default Component;
