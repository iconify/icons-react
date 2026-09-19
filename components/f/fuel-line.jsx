import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiq1vrbyw.css';
import '../../css/x/x9ogwps5l.css';
import '../../css/x/x6h7w2bxh.css';
import '../../css/q/qd6r-1qss.css';
import '../../css/v/vkh503kgi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiq1vrbyw clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 x9ogwps5l"/><path class="clr-i-outline clr-i-outline-path-3 x6h7w2bxh"/><path class="clr-i-outline clr-i-outline-path-4 qd6r-1qss"/><path class="clr-i-outline clr-i-outline-path-5 vkh503kgi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:fuel-line",
	});
}

export default Component;
