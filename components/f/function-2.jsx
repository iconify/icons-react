import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pinfk8lis.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pinfk8lis"/>`,
		"fallback": "carbon:function-2",
	});
}

export default Component;
