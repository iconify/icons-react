import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xahm4zbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xahm4zbgs"/>`,
		"fallback": "keyline-icons:cloud-moon-sharp",
	});
}

export default Component;
