import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdr9u_apw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdr9u_apw"/>`,
		"fallback": "fa6-solid:download",
	});
}

export default Component;
