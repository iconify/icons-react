import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q90_u7bjq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q90_u7bjq"/>`,
		"fallback": "gis:copy-poly",
	});
}

export default Component;
