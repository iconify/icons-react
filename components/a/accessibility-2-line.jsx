import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giswasbjv.css';
import '../../css/z/zjadnvb8k.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 giswasbjv"/><path class="clr-i-outline clr-i-outline-path-2 zjadnvb8k"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:accessibility-2-line",
	});
}

export default Component;
