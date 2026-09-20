import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhlg9b33u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rhlg9b33u"/>`,
		"fallback": "teenyicons:drag-solid",
	});
}

export default Component;
