import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ylf6w5b.css';
import '../../css/r/rt3j0ibnj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0ylf6w5b"/><path class="rt3j0ibnj"/>`,
		"fallback": "carbon:alarm",
	});
}

export default Component;
