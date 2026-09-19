import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ards4o__f.css';
import '../../css/t/t0jstuirm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ards4o__f clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 t0jstuirm"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:fish-line",
	});
}

export default Component;
