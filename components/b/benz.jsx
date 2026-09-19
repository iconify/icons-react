import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xlg4h1uyo.css';
import '../../css/b/bazc4or7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="xlg4h1uyo"/><path class="bazc4or7p"/></g>`,
		"fallback": "icon-park:benz",
	});
}

export default Component;
