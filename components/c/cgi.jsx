import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3f9596av.css';

const viewBox = {"width":1024,"height":833};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3f9596av"/>`,
		"fallback": "whh:cgi",
	});
}

export default Component;
