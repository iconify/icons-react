import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js7zi3nwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js7zi3nwc"/>`,
		"fallback": "healthicons:community-healthworker",
	});
}

export default Component;
