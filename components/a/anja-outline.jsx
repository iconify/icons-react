import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcj5b4bla.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcj5b4bla"/>`,
		"fallback": "teenyicons:anja-outline",
	});
}

export default Component;
