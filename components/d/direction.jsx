import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4x64lg8a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4x64lg8a"/>`,
		"fallback": "lineicons:direction",
	});
}

export default Component;
