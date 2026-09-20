import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqg0u_ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqg0u_ben"/>`,
		"fallback": "keyline-icons:arrow-left-dashed-panel-sharp",
	});
}

export default Component;
