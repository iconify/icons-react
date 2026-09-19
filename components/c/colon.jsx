import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaw-bkn7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaw-bkn7f"/>`,
		"fallback": "healthicons:colon",
	});
}

export default Component;
