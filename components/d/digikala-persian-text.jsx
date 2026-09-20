import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-5x6nayi.css';

const viewBox = {"width":153,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r-5x6nayi"/>`,
		"fallback": "thesvg-color:digikala-persian-text",
	});
}

export default Component;
