import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgk81kb9y.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgk81kb9y"/>`,
		"fallback": "whh:abacus",
	});
}

export default Component;
