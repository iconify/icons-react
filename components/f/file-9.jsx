import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt9rs6yuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt9rs6yuk"/>`,
		"fallback": "subway:file-9",
	});
}

export default Component;
