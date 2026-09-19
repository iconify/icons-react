import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1__7xwon.css';
import '../../css/a/a4ocllb-s.css';
import '../../css/p/px_ym6bts.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l1__7xwon"/><path class="a4ocllb-s clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 px_ym6bts"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:accessibility-1-line",
	});
}

export default Component;
