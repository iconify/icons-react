import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7v4o8g4h.css';
import '../../css/o/o8973hbfi.css';
import '../../css/c/cd-k0ccfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7v4o8g4h"/><path class="o8973hbfi"/><path class="cd-k0ccfw"/>`,
		"fallback": "pixel:gaming",
	});
}

export default Component;
