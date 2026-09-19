import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l61ix9kia.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l61ix9kia"/>`,
		"fallback": "fa7-solid:delete-left",
	});
}

export default Component;
