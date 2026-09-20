import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwzxh9b8m.css';
import '../../css/w/wfizkjosn.css';
import '../../css/p/pz2e0kkio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwzxh9b8m"/><path class="wfizkjosn"/><path class="pz2e0kkio"/>`,
		"fallback": "prime:download",
	});
}

export default Component;
