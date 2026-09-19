import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj7n3bbpe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qj7n3bbpe"/>`,
		"fallback": "glyphs:caret-circle-bold",
	});
}

export default Component;
