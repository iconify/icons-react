import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyl_93bus.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyl_93bus"/>`,
		"fallback": "fa:arrows-alt",
	});
}

export default Component;
