import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2o-2zxot.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2o-2zxot"/>`,
		"fallback": "fa6-solid:helicopter",
	});
}

export default Component;
