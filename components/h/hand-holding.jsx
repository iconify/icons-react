import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohrg4zbtv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ohrg4zbtv"/>`,
		"fallback": "glyphs-poly:hand-holding",
	});
}

export default Component;
