import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/njk1srfih.css';
import '../../css/x/xa0cnobhb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="njk1srfih"/><path class="xa0cnobhb"/></g>`,
		"fallback": "streamline:bicycle-bike",
	});
}

export default Component;
