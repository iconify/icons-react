import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1o7njy2n.css';
import '../../css/l/l8ou0_wvg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 q1o7njy2n"/><path class="clr-i-solid clr-i-solid-path-2 l8ou0_wvg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bug-solid",
	});
}

export default Component;
