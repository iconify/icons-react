import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2i_vdbub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2i_vdbub"/>`,
		"fallback": "streamline:browser-website-1",
	});
}

export default Component;
