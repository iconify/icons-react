import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twoyz1r4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twoyz1r4f"/>`,
		"fallback": "keyline-icons:cloud-sun-sharp",
	});
}

export default Component;
