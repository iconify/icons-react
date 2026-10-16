import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar3qoibyd.css';
import '../../css/r/rtsvhsn1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar3qoibyd"/><path class="rtsvhsn1k"/>`,
		"fallback": "energy-icons:hacksaw-48-bold",
	});
}

export default Component;
