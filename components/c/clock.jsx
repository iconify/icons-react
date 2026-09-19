import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pujr7z9gk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pujr7z9gk"/>`,
		"fallback": "fa6-regular:clock",
	});
}

export default Component;
