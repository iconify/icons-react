import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbsxuj1jh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbsxuj1jh"/>`,
		"fallback": "teenyicons:border-all-solid",
	});
}

export default Component;
