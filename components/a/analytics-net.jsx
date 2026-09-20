import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c6hsm33uq.css';
import '../../css/h/hladwcboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c6hsm33uq"/><path class="hladwcboz"/></g>`,
		"fallback": "streamline-ultimate:analytics-net",
	});
}

export default Component;
