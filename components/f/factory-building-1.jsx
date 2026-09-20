import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nfbuwmo9k.css';
import '../../css/q/qiu-dnb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nfbuwmo9k"/><path class="qiu-dnb9x"/></g>`,
		"fallback": "streamline-ultimate:factory-building-1",
	});
}

export default Component;
