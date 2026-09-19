import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alw736d5i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alw736d5i"/>`,
		"fallback": "glyphs:check-circle-bold",
	});
}

export default Component;
