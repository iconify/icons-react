import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrnudiz8l.css';

const viewBox = {"width":200,"height":55};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrnudiz8l"/>`,
		"fallback": "thesvg-color:hygraph",
	});
}

export default Component;
