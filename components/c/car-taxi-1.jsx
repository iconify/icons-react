import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h-xtj6w1m.css';
import '../../css/o/o2svb5b6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h-xtj6w1m"/><path class="o2svb5b6o"/></g>`,
		"fallback": "streamline-flex:car-taxi-1",
	});
}

export default Component;
