import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4oscvhds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4oscvhds"/>`,
		"fallback": "healthicons:alcohol-cessation",
	});
}

export default Component;
