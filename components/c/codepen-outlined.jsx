import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzj-uaboj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzj-uaboj"/>`,
		"fallback": "ant-design:codepen-outlined",
	});
}

export default Component;
