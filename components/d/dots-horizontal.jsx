import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbm4ihbnt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbm4ihbnt"/>`,
		"fallback": "radix-icons:dots-horizontal",
	});
}

export default Component;
