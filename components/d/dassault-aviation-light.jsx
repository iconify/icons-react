import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i80u9hb9r.css';
import '../../css/g/gs0aqykii.css';

const viewBox = {"width":1547,"height":2503};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i80u9hb9r"/><path class="gs0aqykii"/>`,
		"fallback": "thesvg-color:dassault-aviation-light",
	});
}

export default Component;
