import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w96wjlbpj.css';
import '../../css/b/bn68x2b5w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 w96wjlbpj"/><path class="bn68x2b5w clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:dollar-bill-line",
	});
}

export default Component;
