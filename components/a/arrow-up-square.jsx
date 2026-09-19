import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh5z7f3dn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh5z7f3dn"/>`,
		"fallback": "f7:arrow-up-square",
	});
}

export default Component;
