import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnrkj8hrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnrkj8hrs"/>`,
		"fallback": "selfhst:dji-logbook-dark",
	});
}

export default Component;
