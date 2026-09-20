import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcs4kxjqx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcs4kxjqx"/>`,
		"fallback": "oui:editor-item-align-left",
	});
}

export default Component;
