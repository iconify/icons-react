import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyv0qi4vm.css';
import '../../css/r/r62u3xcnh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyv0qi4vm"/><path class="r62u3xcnh"/>`,
		"fallback": "qlementine-icons:gauge-low-16",
	});
}

export default Component;
