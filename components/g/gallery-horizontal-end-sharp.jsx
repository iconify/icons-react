import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl9ouetbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl9ouetbj"/>`,
		"fallback": "keyline-icons:gallery-horizontal-end-sharp",
	});
}

export default Component;
