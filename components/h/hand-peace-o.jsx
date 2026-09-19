import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czb3gi03f.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czb3gi03f"/>`,
		"fallback": "fa:hand-peace-o",
	});
}

export default Component;
