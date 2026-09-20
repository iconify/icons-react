import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fscgq4lir.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fscgq4lir"/>`,
		"fallback": "pinhead:castle-with-spires",
	});
}

export default Component;
