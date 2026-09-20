import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbp56ycrv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbp56ycrv"/>`,
		"fallback": "streamline:discount-percent-badge-solid",
	});
}

export default Component;
