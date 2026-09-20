import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r53vykz8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r53vykz8u"/>`,
		"fallback": "streamline-plump:exit-full-screen-remix",
	});
}

export default Component;
