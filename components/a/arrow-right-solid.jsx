import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nooz18b2i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nooz18b2i"/>`,
		"fallback": "teenyicons:arrow-right-solid",
	});
}

export default Component;
