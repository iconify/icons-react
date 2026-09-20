import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utk7d4k6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utk7d4k6g"/>`,
		"fallback": "stash:envelope",
	});
}

export default Component;
