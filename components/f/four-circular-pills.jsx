import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nazn4oqpx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nazn4oqpx"/>`,
		"fallback": "pinhead:four-circular-pills",
	});
}

export default Component;
