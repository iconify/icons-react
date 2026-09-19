import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gi9gily.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gi9gily"/>`,
		"fallback": "fa7-solid:draw-polygon",
	});
}

export default Component;
