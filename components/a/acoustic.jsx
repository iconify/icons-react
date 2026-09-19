import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufzd8ubbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufzd8ubbc"/>`,
		"fallback": "icon-park-outline:acoustic",
	});
}

export default Component;
