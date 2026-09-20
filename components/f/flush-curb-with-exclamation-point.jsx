import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu2ujfbuq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu2ujfbuq"/>`,
		"fallback": "pinhead:flush-curb-with-exclamation-point",
	});
}

export default Component;
