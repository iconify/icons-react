import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z80pyoh0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z80pyoh0b"/>`,
		"fallback": "fa6-solid:face-frown-open",
	});
}

export default Component;
