import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfoym6j3n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfoym6j3n"/>`,
		"fallback": "pinhead:flat-coin",
	});
}

export default Component;
