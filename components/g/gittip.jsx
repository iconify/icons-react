import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfubp8nmo.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfubp8nmo"/>`,
		"fallback": "fa:gittip",
	});
}

export default Component;
