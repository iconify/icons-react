import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dutifxv4y.css';
import '../../css/c/ceh6b9jzb.css';
import '../../css/n/ngoo26b5w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 dutifxv4y"/><path class="ceh6b9jzb clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 ngoo26b5w"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:info-circle-line",
	});
}

export default Component;
