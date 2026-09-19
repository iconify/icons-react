import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seob3mb0u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seob3mb0u"/>`,
		"fallback": "carbon:chart-stacked",
	});
}

export default Component;
