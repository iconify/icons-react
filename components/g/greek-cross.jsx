import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ru9zb1d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ru9zb1d"/>`,
		"fallback": "pinhead:greek-cross",
	});
}

export default Component;
