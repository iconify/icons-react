import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml0qwybrs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ml0qwybrs"/>`,
		"fallback": "teenyicons:file-minus-solid",
	});
}

export default Component;
