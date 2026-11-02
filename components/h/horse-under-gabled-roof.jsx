import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2mpj1aue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2mpj1aue"/>`,
		"fallback": "pinhead:horse-under-gabled-roof",
	});
}

export default Component;
