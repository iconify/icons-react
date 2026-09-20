import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmd7zetxe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmd7zetxe"/>`,
		"fallback": "pinhead:arrows-up-down-in-left-right-brackets",
	});
}

export default Component;
