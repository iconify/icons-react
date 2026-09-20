import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i79vyfvhr.css';
import '../../css/y/yuh6-fbab.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i79vyfvhr"/><path class="yuh6-fbab"/>`,
		"fallback": "medical-icon:imaging-alternative-ct",
	});
}

export default Component;
