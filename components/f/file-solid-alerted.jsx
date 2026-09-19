import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3djaybps.css';
import '../../css/r/rtivnsbjy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted i3djaybps"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-2--alerted rtivnsbjy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-solid-alerted",
	});
}

export default Component;
