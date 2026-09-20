import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnw89d4it.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnw89d4it"/>`,
		"fallback": "streamline-plump:arrow-diagonal-2",
	});
}

export default Component;
