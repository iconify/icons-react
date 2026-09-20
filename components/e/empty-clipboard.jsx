import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lut1clltg.css';
import '../../css/c/ci35usb_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="lut1clltg"/><path class="ci35usb_p"/></g>`,
		"fallback": "streamline-plump:empty-clipboard",
	});
}

export default Component;
