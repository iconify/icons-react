import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rao5r5bls.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rao5r5bls"/>`,
		"fallback": "whh:coffee",
	});
}

export default Component;
