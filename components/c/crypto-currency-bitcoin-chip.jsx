import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbtya1bpz.css';
import '../../css/y/yzzav4bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jbtya1bpz"/><path class="yzzav4bwk"/></g>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-chip",
	});
}

export default Component;
