import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuca1sdhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xuca1sdhq"/>`,
		"fallback": "streamline-freehand:cables-usb-type-c",
	});
}

export default Component;
