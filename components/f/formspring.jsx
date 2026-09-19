import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujjvzsbbj.css';

const viewBox = {"width":400,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujjvzsbbj"/>`,
		"fallback": "ps:formspring",
	});
}

export default Component;
