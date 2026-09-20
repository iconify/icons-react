import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7e53cj3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7e53cj3s"/>`,
		"fallback": "thesvg:couchbase",
	});
}

export default Component;
