import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfshv71lw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfshv71lw"/>`,
		"fallback": "healthicons:bone-long",
	});
}

export default Component;
