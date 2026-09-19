import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co4zrkbgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co4zrkbgg"/>`,
		"fallback": "famicons:film-sharp",
	});
}

export default Component;
