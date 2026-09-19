import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gve8z2b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gve8z2b2w"/>`,
		"fallback": "healthicons:high-bars",
	});
}

export default Component;
