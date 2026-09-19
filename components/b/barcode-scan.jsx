import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asrq_fb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asrq_fb_f"/>`,
		"fallback": "hugeicons:barcode-scan",
	});
}

export default Component;
