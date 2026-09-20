import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_69oybqj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_69oybqj"/>`,
		"fallback": "radix-icons:commit",
	});
}

export default Component;
