import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooslwg7gw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooslwg7gw"/>`,
		"fallback": "teenyicons:dropper-solid",
	});
}

export default Component;
