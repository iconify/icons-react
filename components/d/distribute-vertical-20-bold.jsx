import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8n4llp5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8n4llp5f"/>`,
		"fallback": "energy-icons:distribute-vertical-20-bold",
	});
}

export default Component;
