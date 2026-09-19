import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no_04pbeo.css';
import '../../css/z/zw41ydges.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no_04pbeo"/><path class="zw41ydges"/>`,
		"fallback": "carbon:inspection",
	});
}

export default Component;
