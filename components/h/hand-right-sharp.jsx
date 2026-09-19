import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7tbgfbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7tbgfbbp"/>`,
		"fallback": "famicons:hand-right-sharp",
	});
}

export default Component;
