import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg9vbachl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg9vbachl"/>`,
		"fallback": "streamline-flex:electric-cord-1",
	});
}

export default Component;
