import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwuw72bhz.css';
import '../../css/g/gs0icwbbh.css';
import '../../css/e/ebf9xob5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwuw72bhz"/><path class="gs0icwbbh"/><path class="ebf9xob5t"/>`,
		"fallback": "selfhst:capacitor-runtime-light",
	});
}

export default Component;
