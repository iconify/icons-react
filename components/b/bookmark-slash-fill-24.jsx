import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq5os2voj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq5os2voj"/>`,
		"fallback": "octicon:bookmark-slash-fill-24",
	});
}

export default Component;
