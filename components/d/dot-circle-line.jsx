import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys6kqr79s.css';
import '../../css/b/bp242uqss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ys6kqr79s"/><path class="bp242uqss clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:dot-circle-line",
	});
}

export default Component;
