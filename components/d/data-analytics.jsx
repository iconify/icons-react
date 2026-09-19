import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqrep7bti.css';
import '../../css/g/g60lgdcxk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqrep7bti"/><path class="g60lgdcxk"/>`,
		"fallback": "carbon:data-analytics",
	});
}

export default Component;
