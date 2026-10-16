import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvn-b1bgm.css';
import '../../css/x/xszy37jky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvn-b1bgm"/><path class="xszy37jky"/>`,
		"fallback": "energy-icons:gas-detector-48",
	});
}

export default Component;
