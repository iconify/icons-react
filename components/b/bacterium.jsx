import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko5rs75hj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko5rs75hj"/>`,
		"fallback": "fa7-solid:bacterium",
	});
}

export default Component;
