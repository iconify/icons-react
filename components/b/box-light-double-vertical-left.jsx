import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfbiq-b8n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfbiq-b8n"/>`,
		"fallback": "memory:box-light-double-vertical-left",
	});
}

export default Component;
