import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7_0uzhe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7_0uzhe"/>`,
		"fallback": "fa7-solid:hill-rockslide",
	});
}

export default Component;
