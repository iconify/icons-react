import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr7l1klgz.css';
import '../../css/b/bvg9hlbgo.css';

const viewBox = {"width":1547,"height":2503};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr7l1klgz"/><path class="bvg9hlbgo"/>`,
		"fallback": "thesvg-color:dassault-aviation-dark",
	});
}

export default Component;
