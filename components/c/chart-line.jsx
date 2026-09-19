import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2isvmm5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2isvmm5f"/>`,
		"fallback": "fa6-solid:chart-line",
	});
}

export default Component;
