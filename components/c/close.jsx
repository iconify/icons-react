import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyh6fubpy.css';
import '../../css/x/xmpj6ybey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyh6fubpy"/><path class="xmpj6ybey"/>`,
		"fallback": "withicons-bauhaus:close",
	});
}

export default Component;
