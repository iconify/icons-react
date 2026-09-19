import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-62cob3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-62cob3n"/>`,
		"fallback": "ion:color-wand",
	});
}

export default Component;
