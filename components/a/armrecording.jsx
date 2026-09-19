import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-efg3ywk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="b-efg3ywk"/>`,
		"fallback": "fad:armrecording",
	});
}

export default Component;
