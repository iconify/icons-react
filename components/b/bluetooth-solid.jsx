import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8vwweh-t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8vwweh-t"/>`,
		"fallback": "teenyicons:bluetooth-solid",
	});
}

export default Component;
