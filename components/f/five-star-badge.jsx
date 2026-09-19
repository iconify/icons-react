import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7i92f-yw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7i92f-yw"/>`,
		"fallback": "icon-park-outline:five-star-badge",
	});
}

export default Component;
