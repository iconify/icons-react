import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqovhacve.css';
import '../../css/g/gt43axbik.css';
import '../../css/d/dlr77pb9n.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 pqovhacve"/><path class="clr-i-outline clr-i-outline-path-2 gt43axbik"/><path class="clr-i-outline clr-i-outline-path-3 dlr77pb9n"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:clone-line",
	});
}

export default Component;
