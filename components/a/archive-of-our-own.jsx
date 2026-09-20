import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuyvh2sic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuyvh2sic"/>`,
		"fallback": "thesvg-color:archive-of-our-own",
	});
}

export default Component;
