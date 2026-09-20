import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdig3ibwz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdig3ibwz"/>`,
		"fallback": "pinhead:face-with-tongue-out",
	});
}

export default Component;
