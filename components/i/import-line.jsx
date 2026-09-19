import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj4jouw0j.css';
import '../../css/s/so2l71bbs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 jj4jouw0j"/><path class="clr-i-outline clr-i-outline-path-2 so2l71bbs"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:import-line",
	});
}

export default Component;
