import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbdu-tbiz.css';
import '../../css/v/vtxmsw_ac.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbdu-tbiz"/><path class="vtxmsw_ac"/>`,
		"fallback": "clarity:animation-line",
	});
}

export default Component;
