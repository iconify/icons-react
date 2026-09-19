import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9iy3go4i.css';
import '../../css/d/dxl-uqb-c.css';
import '../../css/e/ezxbjlbqv.css';
import '../../css/d/dxqmhhbtw.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted q9iy3go4i"/><circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted dxl-uqb-c"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted ezxbjlbqv"/><path class="clr-i-solid--alerted clr-i-solid-path-4--alerted dxqmhhbtw"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-solid-alerted",
	});
}

export default Component;
