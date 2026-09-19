import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbzr0ebwt.css';
import '../../css/d/dff-kwkxe.css';
import '../../css/r/ruqsmcv7c.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 vbzr0ebwt"/><path class="clr-i-outline clr-i-outline-path-2 dff-kwkxe"/><path class="clr-i-outline clr-i-outline-path-3 ruqsmcv7c"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:briefcase-line",
	});
}

export default Component;
