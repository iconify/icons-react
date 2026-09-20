import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbdo17bye.css';
import '../../css/e/eag0spbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbdo17bye"/><path class="eag0spbkr"/>`,
		"fallback": "streamline-freehand:alerts-warning-triangle",
	});
}

export default Component;
