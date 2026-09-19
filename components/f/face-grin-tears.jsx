import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt2wz29tn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt2wz29tn"/>`,
		"fallback": "fa6-solid:face-grin-tears",
	});
}

export default Component;
