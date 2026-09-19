import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgrpurb3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgrpurb3m"/>`,
		"fallback": "fa6-solid:face-frown",
	});
}

export default Component;
