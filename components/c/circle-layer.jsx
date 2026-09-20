import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8xe1abcy.css';
import '../../css/m/mjic8l8dj.css';
import '../../css/a/ard9wdwyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8xe1abcy"/><circle class="mjic8l8dj"/><path class="ard9wdwyt"/>`,
		"fallback": "uim:circle-layer",
	});
}

export default Component;
