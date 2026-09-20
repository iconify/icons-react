import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vot-hdb9m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vot-hdb9m"/>`,
		"fallback": "map:fire-station",
	});
}

export default Component;
