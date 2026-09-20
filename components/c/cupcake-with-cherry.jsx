import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7rz5mx2k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7rz5mx2k"/>`,
		"fallback": "pinhead:cupcake-with-cherry",
	});
}

export default Component;
