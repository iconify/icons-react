import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky87bk4jd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky87bk4jd"/>`,
		"fallback": "energy-icons:family-48",
	});
}

export default Component;
