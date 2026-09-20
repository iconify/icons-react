import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j36ek5mfl.css';
import '../../css/w/wyq4150dw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j36ek5mfl"/><path class="wyq4150dw"/>`,
		"fallback": "selfhst:cr-nmaster-dark",
	});
}

export default Component;
