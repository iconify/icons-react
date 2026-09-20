import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a316u6-zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a316u6-zx"/>`,
		"fallback": "reicon:arrow-left-3",
	});
}

export default Component;
