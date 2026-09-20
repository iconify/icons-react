import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fm6ybam.css';
import '../../css/t/tegirhu2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f3fm6ybam"/><path class="tegirhu2m"/>`,
		"fallback": "selfhst:ars-technica",
	});
}

export default Component;
