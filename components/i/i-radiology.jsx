import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdl-6zbdg.css';
import '../../css/w/w6se-gehu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdl-6zbdg"/><path class="w6se-gehu"/>`,
		"fallback": "medical-icon:i-radiology",
	});
}

export default Component;
