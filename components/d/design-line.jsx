import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9zjpsbxq.css';
import '../../css/i/izomx4vfd.css';
import '../../css/r/rra0q9q9g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 d9zjpsbxq"/><path class="clr-i-outline clr-i-outline-path-2 izomx4vfd"/><path class="clr-i-outline clr-i-outline-path-3 rra0q9q9g"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:design-line",
	});
}

export default Component;
