import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqfs981ly.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqfs981ly"/>`,
		"fallback": "medical-icon:i-ear-nose-throat",
	});
}

export default Component;
