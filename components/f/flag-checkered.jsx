import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz_reeb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz_reeb8r"/>`,
		"fallback": "fa-solid:flag-checkered",
	});
}

export default Component;
