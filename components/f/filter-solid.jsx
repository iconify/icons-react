import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha06gbbrn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha06gbbrn"/>`,
		"fallback": "teenyicons:filter-solid",
	});
}

export default Component;
