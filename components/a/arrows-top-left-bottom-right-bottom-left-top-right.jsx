import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9znblbpg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9znblbpg"/>`,
		"fallback": "pinhead:arrows-top-left-bottom-right-bottom-left-top-right",
	});
}

export default Component;
