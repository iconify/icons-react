import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr8spdb8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr8spdb8t"/>`,
		"fallback": "icon-park-outline:five-five",
	});
}

export default Component;
