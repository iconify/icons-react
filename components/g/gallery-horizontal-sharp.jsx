import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox_8jbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox_8jbpe"/>`,
		"fallback": "keyline-icons:gallery-horizontal-sharp",
	});
}

export default Component;
