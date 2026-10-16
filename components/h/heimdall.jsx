import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iemmtbc_j.css';
import '../../css/j/jr2o5bbib.css';

const viewBox = {"width":346,"height":434};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iemmtbc_j"/><path class="cls-1 jr2o5bbib"/>`,
		"fallback": "thesvg-color:heimdall",
	});
}

export default Component;
