import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uciu-_jsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uciu-_jsc"/>`,
		"fallback": "nrk:dice-1-active",
	});
}

export default Component;
