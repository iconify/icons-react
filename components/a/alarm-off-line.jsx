import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clcsdocbl.css';
import '../../css/r/r4am3ojlg.css';
import '../../css/t/twv3iebjz.css';
import '../../css/o/omtbn4xab.css';
import '../../css/f/frct70b2d.css';
import '../../css/d/d29c-qzoc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clcsdocbl clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 r4am3ojlg"/><path class="clr-i-outline clr-i-outline-path-3 twv3iebjz"/><path class="clr-i-outline clr-i-outline-path-4 omtbn4xab"/><path class="clr-i-outline clr-i-outline-path-5 frct70b2d"/><path class="clr-i-outline clr-i-outline-path-6 d29c-qzoc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:alarm-off-line",
	});
}

export default Component;
