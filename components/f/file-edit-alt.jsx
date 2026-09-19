import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da6jecb7r.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da6jecb7r"/>`,
		"fallback": "el:file-edit-alt",
	});
}

export default Component;
