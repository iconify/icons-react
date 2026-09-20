import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezsh2vbaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ezsh2vbaf"/>`,
		"fallback": "streamline-plump:calendar-heart-solid",
	});
}

export default Component;
