import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-_2adb0h.css';
import '../../css/z/zjyhuob5r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 f-_2adb0h"/><path class="clr-i-outline clr-i-outline-path-2 zjyhuob5r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:download-line",
	});
}

export default Component;
