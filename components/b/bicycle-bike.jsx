import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rt3mf04ij.css';
import '../../css/w/wkvg7xb3u.css';
import '../../css/z/z3to9pb5a.css';
import '../../css/m/mmbyl2bji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rt3mf04ij"/><path class="wkvg7xb3u"/><path class="z3to9pb5a"/><path class="mmbyl2bji"/></g>`,
		"fallback": "streamline-plump-color:bicycle-bike",
	});
}

export default Component;
