import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1uvyt01z.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1uvyt01z"/>`,
		"fallback": "fa6-solid:box-open",
	});
}

export default Component;
