import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86bcdb_x.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86bcdb_x"/>`,
		"fallback": "whh:flash",
	});
}

export default Component;
