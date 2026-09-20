import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-k6kc-pi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-k6kc-pi"/>`,
		"fallback": "teenyicons:d3-solid",
	});
}

export default Component;
