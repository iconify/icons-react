import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joa-7ibra.css';
import '../../css/p/pgshgrb4e.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 joa-7ibra"/><path class="clr-i-outline clr-i-outline-path-2 pgshgrb4e"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:copy-line",
	});
}

export default Component;
