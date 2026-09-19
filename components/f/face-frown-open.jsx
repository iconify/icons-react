import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5sf_o82m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5sf_o82m"/>`,
		"fallback": "fa6-regular:face-frown-open",
	});
}

export default Component;
