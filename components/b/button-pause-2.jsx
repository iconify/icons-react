import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi369eb3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi369eb3d"/>`,
		"fallback": "streamline:button-pause-2",
	});
}

export default Component;
