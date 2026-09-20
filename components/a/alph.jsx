import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-am5se9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-am5se9g"/>`,
		"fallback": "token:alph",
	});
}

export default Component;
