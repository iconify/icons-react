import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab51tkfnk.css';

const viewBox = {"width":440,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab51tkfnk"/>`,
		"fallback": "zmdi:format-line-spacing",
	});
}

export default Component;
