import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxl-uqb-c.css';
import '../../css/g/g5vhpfb4s.css';
import '../../css/e/ezxbjlbqv.css';
import '../../css/e/e9imb0b3j.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 dxl-uqb-c"/><path class="clr-i-solid clr-i-solid-path-2 g5vhpfb4s"/><path class="clr-i-solid clr-i-solid-path-3 ezxbjlbqv"/><path class="clr-i-solid clr-i-solid-path-4 e9imb0b3j"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-solid",
	});
}

export default Component;
