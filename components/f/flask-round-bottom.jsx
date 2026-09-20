import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br14ndb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br14ndb4k"/>`,
		"fallback": "mdi:flask-round-bottom",
	});
}

export default Component;
