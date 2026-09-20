import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd2xhk3go.css';
import '../../css/o/oaj_2iwov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd2xhk3go"/><path class="oaj_2iwov"/>`,
		"fallback": "streamline-pixel:hand-four",
	});
}

export default Component;
