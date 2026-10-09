import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec6pe6b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec6pe6b-n"/>`,
		"fallback": "energy-icons:energy-cooperative-48",
	});
}

export default Component;
