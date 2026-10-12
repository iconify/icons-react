import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l46lvfrxi.css';
import '../../css/g/g07kyqb8d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l46lvfrxi"/><path class="g07kyqb8d"/>`,
		"fallback": "garden:file-zip-stroke-20",
	});
}

export default Component;
