import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngoo26b5w.css';
import '../../css/s/sgl6mzbwy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ngoo26b5w"/><path class="clr-i-outline clr-i-outline-path-2 sgl6mzbwy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:check-circle-line",
	});
}

export default Component;
