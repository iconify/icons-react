import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ellay1bqj.css';

const viewBox = {"width":1152,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ellay1bqj"/>`,
		"fallback": "fa:genderless",
	});
}

export default Component;
