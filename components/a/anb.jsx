import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqqfc0spw.css';

const viewBox = {"width":200,"height":156.7,"left":72.8,"top":468.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqqfc0spw"/>`,
		"fallback": "thesvg:anb",
	});
}

export default Component;
