import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhz9xx3hp.css';
import '../../css/w/wb8gpybsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhz9xx3hp"/><path class="wb8gpybsf"/>`,
		"fallback": "oui:download",
	});
}

export default Component;
