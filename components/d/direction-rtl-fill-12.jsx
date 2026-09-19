import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmt3q2buw.css';
import '../../css/q/qstrk3-9l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmt3q2buw"/><path class="qstrk3-9l"/>`,
		"fallback": "garden:direction-rtl-fill-12",
	});
}

export default Component;
