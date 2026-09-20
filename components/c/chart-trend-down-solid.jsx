import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo75l1ond.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo75l1ond"/>`,
		"fallback": "stash:chart-trend-down-solid",
	});
}

export default Component;
