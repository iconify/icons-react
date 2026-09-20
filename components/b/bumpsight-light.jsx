import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo9cc-xor.css';
import '../../css/r/rd8e13qsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="eo9cc-xor"/><path class="rd8e13qsa"/>`,
		"fallback": "selfhst:bumpsight-light",
	});
}

export default Component;
