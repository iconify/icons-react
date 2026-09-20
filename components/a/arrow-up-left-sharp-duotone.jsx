import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxd616xaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxd616xaa"/>`,
		"fallback": "keyline-icons:arrow-up-left-sharp-duotone",
	});
}

export default Component;
