import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnq21wbic.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnq21wbic"/>`,
		"fallback": "teenyicons:align-text-right-solid",
	});
}

export default Component;
