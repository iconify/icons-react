import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uppdm7bpx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uppdm7bpx"/>`,
		"fallback": "bi:9-circle",
	});
}

export default Component;
