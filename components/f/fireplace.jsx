import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvc9jbl1a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvc9jbl1a"/>`,
		"fallback": "temaki:fireplace",
	});
}

export default Component;
