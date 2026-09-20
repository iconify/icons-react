import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp8p9sznl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp8p9sznl"/>`,
		"fallback": "radix-icons:drawing-pin",
	});
}

export default Component;
