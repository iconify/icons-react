import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huoyumh1w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huoyumh1w"/>`,
		"fallback": "gis:copy-line",
	});
}

export default Component;
