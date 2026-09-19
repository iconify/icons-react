import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daqkvwn8r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daqkvwn8r"/>`,
		"fallback": "fa6-regular:hourglass-half",
	});
}

export default Component;
