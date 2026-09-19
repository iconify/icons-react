import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u65hmsmhq.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u65hmsmhq"/>`,
		"fallback": "fa:fast-backward",
	});
}

export default Component;
