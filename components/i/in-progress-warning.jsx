import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz_fdacbr.css';
import '../../css/j/jj9znifff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz_fdacbr"/><path class="jj9znifff"/>`,
		"fallback": "carbon:in-progress-warning",
	});
}

export default Component;
