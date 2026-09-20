import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa9u3uthd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pa9u3uthd"/>`,
		"fallback": "pajamas:diagram",
	});
}

export default Component;
