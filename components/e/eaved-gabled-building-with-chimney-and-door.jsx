import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5vhaob4d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5vhaob4d"/>`,
		"fallback": "pinhead:eaved-gabled-building-with-chimney-and-door",
	});
}

export default Component;
