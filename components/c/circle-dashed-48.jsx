import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzje2pbro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzje2pbro"/>`,
		"fallback": "energy-icons:circle-dashed-48",
	});
}

export default Component;
