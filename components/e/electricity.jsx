import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5nfwccif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5nfwccif"/>`,
		"fallback": "pepicons-pencil:electricity",
	});
}

export default Component;
