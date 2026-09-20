import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j3jil5c3a.css';
import '../../css/g/ghw9npx3a.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j3jil5c3a"/><path class="ghw9npx3a"/></g>`,
		"fallback": "marketeq:barrier",
	});
}

export default Component;
