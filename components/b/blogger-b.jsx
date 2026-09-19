import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmdgq1b2o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmdgq1b2o"/>`,
		"fallback": "fa7-brands:blogger-b",
	});
}

export default Component;
