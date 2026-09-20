import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj9dmqyru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj9dmqyru"/>`,
		"fallback": "reicon:docs",
	});
}

export default Component;
