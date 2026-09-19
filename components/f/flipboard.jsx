import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuq3ycbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuq3ycbrc"/>`,
		"fallback": "fontisto:flipboard",
	});
}

export default Component;
