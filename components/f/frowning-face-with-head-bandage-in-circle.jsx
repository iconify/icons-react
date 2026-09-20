import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3368wbsw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3368wbsw"/>`,
		"fallback": "pinhead:frowning-face-with-head-bandage-in-circle",
	});
}

export default Component;
