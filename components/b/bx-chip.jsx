import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9lfmybtd.css';
import '../../css/f/fypx88b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9lfmybtd"/><path class="fypx88b1p"/>`,
		"fallback": "bx:bx-chip",
	});
}

export default Component;
