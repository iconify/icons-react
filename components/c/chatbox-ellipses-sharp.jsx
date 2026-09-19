import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k39micclf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k39micclf"/>`,
		"fallback": "ion:chatbox-ellipses-sharp",
	});
}

export default Component;
