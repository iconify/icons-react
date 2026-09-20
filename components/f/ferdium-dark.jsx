import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp7k9wstt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp7k9wstt"/>`,
		"fallback": "selfhst:ferdium-dark",
	});
}

export default Component;
