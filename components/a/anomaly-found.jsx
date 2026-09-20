import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbcd8xbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbcd8xbyp"/>`,
		"fallback": "ix:anomaly-found",
	});
}

export default Component;
