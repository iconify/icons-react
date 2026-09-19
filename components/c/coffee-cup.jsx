import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4eh4m8zs.css';
import '../../css/n/nsbkbugsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c4eh4m8zs"/><path class="nsbkbugsi"/></g>`,
		"fallback": "iconoir:coffee-cup",
	});
}

export default Component;
