import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ktthbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ktthbzh"/>`,
		"fallback": "keyline-icons:file-arrow-right-sharp",
	});
}

export default Component;
