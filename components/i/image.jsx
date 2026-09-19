import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzcjdt65k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzcjdt65k"/>`,
		"fallback": "fa6-regular:image",
	});
}

export default Component;
