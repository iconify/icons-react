import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqh3w-bjo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqh3w-bjo"/>`,
		"fallback": "streamline-flex:floppy-disk-remix",
	});
}

export default Component;
