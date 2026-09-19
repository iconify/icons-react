import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyd1il43d.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyd1il43d"/><path class="tsepx-fqx"/>`,
		"fallback": "carbon:closed-caption-alt",
	});
}

export default Component;
