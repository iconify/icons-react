import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y21dk_wfs.css';
import '../../css/k/k4mqvjn9x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y21dk_wfs"/><path class="k4mqvjn9x"/>`,
		"fallback": "carbon:change-catalog",
	});
}

export default Component;
