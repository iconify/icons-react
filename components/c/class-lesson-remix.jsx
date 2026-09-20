import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twh0pggxp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="twh0pggxp"/>`,
		"fallback": "streamline:class-lesson-remix",
	});
}

export default Component;
