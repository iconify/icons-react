import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty3029wgl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty3029wgl"/>`,
		"fallback": "famicons:female-sharp",
	});
}

export default Component;
