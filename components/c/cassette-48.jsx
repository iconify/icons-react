import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq88i7qnu.css';
import '../../css/c/c_5vdvbsq.css';
import '../../css/o/oqui6zsbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq88i7qnu"/><path class="c_5vdvbsq"/><path class="oqui6zsbr"/>`,
		"fallback": "energy-icons:cassette-48",
	});
}

export default Component;
