import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeu2khb_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeu2khb_p"/>`,
		"fallback": "streamline-plump:insert-column",
	});
}

export default Component;
