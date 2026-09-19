import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzes6p0dp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzes6p0dp"/>`,
		"fallback": "icon-park-outline:expand-down-one",
	});
}

export default Component;
