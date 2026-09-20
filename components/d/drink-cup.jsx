import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_9n0bxw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl_9n0bxw"/>`,
		"fallback": "temaki:drink-cup",
	});
}

export default Component;
