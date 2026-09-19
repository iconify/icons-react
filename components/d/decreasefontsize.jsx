import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2cnbnb2l.css';
import '../../css/z/zbeas57fc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2cnbnb2l"/><path class="zbeas57fc"/>`,
		"fallback": "fxemoji:decreasefontsize",
	});
}

export default Component;
