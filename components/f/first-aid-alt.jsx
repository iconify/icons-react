import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwldzvb5c.css';
import '../../css/s/spys-wb5e.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwldzvb5c"/><path class="spys-wb5e"/>`,
		"fallback": "fontisto:first-aid-alt",
	});
}

export default Component;
