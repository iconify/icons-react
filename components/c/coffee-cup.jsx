import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_o3v5lak.css';
import '../../css/n/nsbkbugsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s_o3v5lak"/><path class="nsbkbugsi"/></g>`,
		"fallback": "iconoir:coffee-cup",
	});
}

export default Component;
