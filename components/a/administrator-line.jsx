import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nelavccdv.css';
import '../../css/s/srcwxdbbt.css';
import '../../css/u/u3tw6ib6c.css';
import '../../css/o/ozqx39bvc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 nelavccdv"/><path class="clr-i-outline clr-i-outline-path-2 srcwxdbbt"/><path class="clr-i-outline clr-i-outline-path-3 u3tw6ib6c"/><path class="clr-i-outline clr-i-outline-path-4 ozqx39bvc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:administrator-line",
	});
}

export default Component;
