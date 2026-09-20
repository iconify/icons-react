import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inekdqlya.css';
import '../../css/v/vvzndmq7j.css';
import '../../css/s/s8gs-vbvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inekdqlya"/><path class="vvzndmq7j"/><path class="s8gs-vbvb"/>`,
		"fallback": "streamline-pixel:design-color-tube-pastel",
	});
}

export default Component;
