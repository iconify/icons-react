import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2zn-v2ix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2zn-v2ix"/>`,
		"fallback": "streamline:hard-disk-remix",
	});
}

export default Component;
