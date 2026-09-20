import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7nz9-bbl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7nz9-bbl"/>`,
		"fallback": "temaki:hotpot",
	});
}

export default Component;
