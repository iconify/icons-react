import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa2vsbctw.css';

const viewBox = {"width":472,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa2vsbctw"/>`,
		"fallback": "zmdi:input-antenna",
	});
}

export default Component;
