import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax7kk0bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax7kk0bmy"/>`,
		"fallback": "fa6-regular:hand-point-right",
	});
}

export default Component;
