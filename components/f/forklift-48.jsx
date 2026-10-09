import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy68n8jis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy68n8jis"/>`,
		"fallback": "energy-icons:forklift-48",
	});
}

export default Component;
