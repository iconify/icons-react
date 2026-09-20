import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eljc5bb9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eljc5bb9w"/>`,
		"fallback": "streamline-plump:check-thick-solid",
	});
}

export default Component;
