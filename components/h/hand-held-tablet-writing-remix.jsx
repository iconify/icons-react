import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ew_ob-h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6ew_ob-h"/>`,
		"fallback": "streamline:hand-held-tablet-writing-remix",
	});
}

export default Component;
