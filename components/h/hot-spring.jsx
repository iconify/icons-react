import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h33pn8bkj.css';
import '../../css/g/gb4unfbkx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h33pn8bkj"/><path class="gb4unfbkx"/></g>`,
		"fallback": "streamline:hot-spring",
	});
}

export default Component;
