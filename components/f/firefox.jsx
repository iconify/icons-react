import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh516mbvj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh516mbvj"/>`,
		"fallback": "whh:firefox",
	});
}

export default Component;
