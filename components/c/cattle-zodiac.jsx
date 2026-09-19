import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l5ohr-bmh.css';
import '../../css/i/i2ktc1wqj.css';
import '../../css/d/di46qzpzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="l5ohr-bmh"/><path class="i2ktc1wqj"/><path class="di46qzpzr"/></g>`,
		"fallback": "icon-park-outline:cattle-zodiac",
	});
}

export default Component;
