import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycoe2fbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycoe2fbkk"/>`,
		"fallback": "keyline-icons:arrow-in-right-dashed-panel-sharp",
	});
}

export default Component;
