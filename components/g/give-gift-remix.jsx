import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5jeaofne.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5jeaofne"/>`,
		"fallback": "streamline:give-gift-remix",
	});
}

export default Component;
