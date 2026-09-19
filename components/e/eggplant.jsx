import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olfxt0bbt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olfxt0bbt"/>`,
		"fallback": "whh:eggplant",
	});
}

export default Component;
