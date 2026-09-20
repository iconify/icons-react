import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqz-ibde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqz-ibde"/>`,
		"fallback": "selfhst:ars-technica-dark",
	});
}

export default Component;
