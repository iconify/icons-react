import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhkr7jb1n.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhkr7jb1n"/>`,
		"fallback": "fa:database",
	});
}

export default Component;
