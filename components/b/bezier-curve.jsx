import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzlm72b8h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzlm72b8h"/>`,
		"fallback": "fa-solid:bezier-curve",
	});
}

export default Component;
